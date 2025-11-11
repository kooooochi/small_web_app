/**
 * Unit Tests
 * ユーティリティ関数とバリデーション関数のテスト例
 */

import { formatDate, capitalize, shuffle, deepClone } from '../../src/utils/helpers';
import {
  validateEmail,
  validatePassword,
  validateURL,
  validatePhoneNumber,
  isNotEmpty
} from '../../src/utils/validators';

describe('Helpers Tests', () => {
  describe('formatDate', () => {
    test('正しく日付をフォーマットする', () => {
      const date = new Date('2024-01-15');
      const result = formatDate(date, 'YYYY-MM-DD');
      expect(result).toBe('2024-01-15');
    });

    test('異なるフォーマットで日付を変換する', () => {
      const date = new Date('2024-03-05');
      const result = formatDate(date, 'YYYY/MM/DD');
      expect(result).toBe('2024/03/05');
    });
  });

  describe('capitalize', () => {
    test('最初の文字を大文字にする', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('空文字の場合は空文字を返す', () => {
      expect(capitalize('')).toBe('');
    });

    test('既に大文字の場合はそのまま返す', () => {
      expect(capitalize('World')).toBe('World');
    });
  });

  describe('shuffle', () => {
    test('配列の長さが変わらない', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = shuffle(arr);
      expect(result.length).toBe(arr.length);
    });

    test('元の配列が変更されない', () => {
      const arr = [1, 2, 3];
      const original = [...arr];
      shuffle(arr);
      expect(arr).toEqual(original);
    });
  });

  describe('deepClone', () => {
    test('オブジェクトの深いコピーを作成する', () => {
      const obj = { a: 1, b: { c: 2 } };
      const cloned = deepClone(obj);

      expect(cloned).toEqual(obj);
      expect(cloned).not.toBe(obj);
      expect(cloned.b).not.toBe(obj.b);
    });
  });
});

describe('Validators Tests', () => {
  describe('validateEmail', () => {
    test('正しいメールアドレスを検証する', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.jp')).toBe(true);
    });

    test('不正なメールアドレスを拒否する', () => {
      expect(validateEmail('invalid')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    test('有効なパスワードを受け入れる', () => {
      const result = validatePassword('password123');
      expect(result.valid).toBe(true);
    });

    test('8文字未満のパスワードを拒否する', () => {
      const result = validatePassword('pass1');
      expect(result.valid).toBe(false);
      expect(result.message).toContain('8文字以上');
    });

    test('英字のみのパスワードを拒否する', () => {
      const result = validatePassword('password');
      expect(result.valid).toBe(false);
      expect(result.message).toContain('英字と数字');
    });

    test('数字のみのパスワードを拒否する', () => {
      const result = validatePassword('12345678');
      expect(result.valid).toBe(false);
      expect(result.message).toContain('英字と数字');
    });
  });

  describe('validateURL', () => {
    test('正しいURLを検証する', () => {
      expect(validateURL('https://example.com')).toBe(true);
      expect(validateURL('http://localhost:3000')).toBe(true);
    });

    test('不正なURLを拒否する', () => {
      expect(validateURL('not-a-url')).toBe(false);
      expect(validateURL('example.com')).toBe(false);
    });
  });

  describe('validatePhoneNumber', () => {
    test('正しい日本の電話番号を検証する', () => {
      expect(validatePhoneNumber('09012345678')).toBe(true);
      expect(validatePhoneNumber('0312345678')).toBe(true);
      expect(validatePhoneNumber('090-1234-5678')).toBe(true);
    });

    test('不正な電話番号を拒否する', () => {
      expect(validatePhoneNumber('123')).toBe(false);
      expect(validatePhoneNumber('1234567890')).toBe(false);
    });
  });

  describe('isNotEmpty', () => {
    test('空でない文字列を受け入れる', () => {
      expect(isNotEmpty('hello')).toBe(true);
      expect(isNotEmpty(' text ')).toBe(true);
    });

    test('空文字を拒否する', () => {
      expect(isNotEmpty('')).toBe(false);
      expect(isNotEmpty('   ')).toBe(false);
      expect(isNotEmpty(null)).toBe(false);
      expect(isNotEmpty(undefined)).toBe(false);
    });
  });
});
