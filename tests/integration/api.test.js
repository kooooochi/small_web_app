/**
 * Integration Tests
 * API Serviceの統合テスト例
 */

import { ApiService } from '../../src/services/api';

describe('API Service Integration Tests', () => {
  let apiService;
  const mockBaseURL = 'https://api.example.com';

  beforeEach(() => {
    apiService = new ApiService(mockBaseURL);
  });

  describe('GET Requests', () => {
    test('正常なGETリクエストを実行できる', async () => {
      // モックレスポンスの設定
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          headers: new Map([['content-type', 'application/json']]),
          json: async () => ({ data: 'test' }),
        })
      );

      const result = await apiService.get('/users');

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/users'),
        expect.objectContaining({
          method: 'GET',
        })
      );
      expect(result).toEqual({ data: 'test' });
    });

    test('クエリパラメータを含むリクエストを実行できる', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          headers: new Map([['content-type', 'application/json']]),
          json: async () => ({ data: 'filtered' }),
        })
      );

      await apiService.get('/users', { role: 'admin', active: 'true' });

      const calledURL = fetch.mock.calls[0][0];
      expect(calledURL.toString()).toContain('role=admin');
      expect(calledURL.toString()).toContain('active=true');
    });
  });

  describe('POST Requests', () => {
    test('正常なPOSTリクエストを実行できる', async () => {
      const postData = { name: 'Test User', email: 'test@example.com' };

      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          headers: new Map([['content-type', 'application/json']]),
          json: async () => ({ id: 1, ...postData }),
        })
      );

      const result = await apiService.post('/users', postData);

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/users'),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(postData),
        })
      );
      expect(result.id).toBe(1);
      expect(result.name).toBe(postData.name);
    });
  });

  describe('Authentication', () => {
    test('認証トークンを設定できる', async () => {
      const token = 'test-token-123';
      apiService.setAuthToken(token);

      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          headers: new Map([['content-type', 'application/json']]),
          json: async () => ({ data: 'authenticated' }),
        })
      );

      await apiService.get('/protected');

      expect(fetch).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: `Bearer ${token}`,
          }),
        })
      );
    });
  });

  describe('Error Handling', () => {
    test('HTTPエラーを適切に処理する', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          status: 404,
        })
      );

      await expect(apiService.get('/not-found')).rejects.toThrow(
        'HTTP error! status: 404'
      );
    });

    test('ネットワークエラーを適切に処理する', async () => {
      global.fetch = jest.fn(() =>
        Promise.reject(new Error('Network error'))
      );

      await expect(apiService.get('/users')).rejects.toThrow('Network error');
    });
  });

  describe('Response Handling', () => {
    test('JSON以外のレスポンスを処理できる', async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          headers: new Map([['content-type', 'text/plain']]),
          text: async () => 'Plain text response',
        })
      );

      const result = await apiService.get('/text');
      expect(result).toBe('Plain text response');
    });
  });

  describe('Full User Flow', () => {
    test('ユーザー作成から取得までのフローをテスト', async () => {
      const newUser = { name: 'New User', email: 'new@example.com' };

      // ユーザー作成
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          headers: new Map([['content-type', 'application/json']]),
          json: async () => ({ id: 123, ...newUser }),
        })
      );

      const createdUser = await apiService.post('/users', newUser);
      expect(createdUser.id).toBe(123);

      // 作成したユーザーを取得
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          headers: new Map([['content-type', 'application/json']]),
          json: async () => ({ id: 123, ...newUser }),
        })
      );

      const fetchedUser = await apiService.get(`/users/${createdUser.id}`);
      expect(fetchedUser).toEqual(createdUser);
    });
  });
});
