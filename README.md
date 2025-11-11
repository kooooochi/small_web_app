# Small Web App

サンプルWebアプリケーションプロジェクト

## 概要

このプロジェクトは、ネストされたディレクトリ構造を持つサンプルWebアプリケーションです。各ディレクトリには目的別にコード、ドキュメント、テストが整理されています。

## プロジェクト構造

```
small_web_app/
├── src/          # ソースコード
├── docs/         # ドキュメント
└── tests/        # テストコード
```

## ディレクトリ

- **[src/](./src/README.md)** - アプリケーションのソースコード
  - [components/](./src/components/README.md) - UIコンポーネント
  - [utils/](./src/utils/README.md) - ユーティリティ関数
  - [services/](./src/services/README.md) - APIサービス層
- **[docs/](./docs/README.md)** - プロジェクトドキュメント
  - [architecture/](./docs/architecture/README.md) - アーキテクチャ設計
  - [guides/](./docs/guides/README.md) - 開発ガイド
- **[tests/](./tests/README.md)** - テストコード
  - [unit/](./tests/unit/README.md) - ユニットテスト
  - [integration/](./tests/integration/README.md) - 統合テスト

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# テストの実行
npm test
```

## 注意事項

このプロジェクトはサンプルです。実際の機密情報は含まれていません。