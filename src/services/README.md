# services/

APIサービス層

## 概要

外部APIとの通信やビジネスロジックを管理するディレクトリです。

## ファイル一覧

### api.js
API通信の基本クラスとメソッド
- HTTP リクエスト処理
- エラーハンドリング
- レスポンス変換

## 使用方法

```javascript
import { ApiService } from './services/api';

const api = new ApiService('https://api.example.com');
const data = await api.get('/users');
```

## 注意事項

- API キーやトークンは環境変数から読み込む
- 機密情報をコードに直接記述しない

---

[src/へ戻る](../README.md) | [トップへ戻る](../../README.md)
