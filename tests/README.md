# tests/

テストコード

## 概要

アプリケーションのテストコードを格納するディレクトリです。

## ディレクトリ構成

- **[unit/](./unit/README.md)** - ユニットテスト（個別の関数やクラスのテスト）
- **[integration/](./integration/README.md)** - 統合テスト（複数のモジュールの連携テスト）

## テスト実行方法

```bash
# すべてのテストを実行
npm test

# ユニットテストのみ実行
npm run test:unit

# 統合テストのみ実行
npm run test:integration

# カバレッジレポート生成
npm run test:coverage
```

## テスト作成ガイドライン

1. 各機能に対してテストを作成
2. テストケース名は明確に
3. エッジケースもカバー
4. モックは必要最小限に

---

[トップへ戻る](../README.md)
