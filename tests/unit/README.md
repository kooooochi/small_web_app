# unit/

ユニットテスト

## 概要

個別の関数やクラスの動作を検証するユニットテストを格納するディレクトリです。

## テストファイル

### example.test.js
ユーティリティ関数とバリデーション関数のテスト例

## テストの書き方

### 基本構造

```javascript
describe('テスト対象の機能', () => {
  test('期待される動作の説明', () => {
    // Arrange（準備）
    const input = 'test';

    // Act（実行）
    const result = targetFunction(input);

    // Assert（検証）
    expect(result).toBe('expected');
  });
});
```

### 良いテストの条件

1. **独立性**: 他のテストに依存しない
2. **再現性**: 何度実行しても同じ結果
3. **明確性**: テストの意図が明確
4. **速度**: 高速に実行できる

## 実行方法

```bash
# このディレクトリのテストのみ実行
npm run test:unit
```

---

[tests/へ戻る](../README.md) | [トップへ戻る](../../README.md)
