# Getting Started

プロジェクトの始め方

## 前提条件

- Node.js 18.x 以上
- npm または yarn
- Git

## セットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/your-username/small_web_app.git
cd small_web_app
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.example` をコピーして `.env` を作成：

```bash
cp .env.example .env
```

環境変数の例：
```
API_BASE_URL=https://api.example.com
API_KEY=YOUR_API_KEY_HERE
```

**注意**: 実際のAPIキーは安全に管理し、リポジトリにコミットしないこと

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開く

## プロジェクト構造

```
small_web_app/
├── src/          # ソースコード
├── docs/         # ドキュメント
└── tests/        # テスト
```

詳細は [トップのREADME](../../README.md) を参照

## 基本的な開発フロー

### 1. 新しいコンポーネントの作成

```bash
# コンポーネントディレクトリを作成
mkdir src/components/NewComponent

# ファイルを作成
touch src/components/NewComponent/index.js
touch src/components/NewComponent/styles.css
```

### 2. コンポーネントの実装

```javascript
// src/components/NewComponent/index.js
class NewComponent {
  constructor(props) {
    this.props = props;
  }

  render() {
    const element = document.createElement('div');
    element.className = 'new-component';
    element.textContent = this.props.text;
    return element;
  }
}

export default NewComponent;
```

### 3. テストの作成

```bash
# テストファイルを作成
touch tests/unit/NewComponent.test.js
```

### 4. テストの実行

```bash
npm test
```

## よくある質問

### API通信の方法は？

`src/services/api.js` の `ApiService` クラスを使用：

```javascript
import { ApiService } from './services/api';

const api = new ApiService(process.env.API_BASE_URL);
api.setAuthToken(process.env.API_KEY);

const data = await api.get('/endpoint');
```

### バリデーションはどこに書く？

`src/utils/validators.js` に共通のバリデーション関数を配置：

```javascript
import { validateEmail } from './utils/validators';

if (!validateEmail(userInput)) {
  console.error('Invalid email format');
}
```

## 次のステップ

- [アーキテクチャ設計](../architecture/diagram.md) を読む
- サンプルコンポーネントを確認する
- 実際に機能を追加してみる

---

[guides/へ戻る](./README.md) | [トップへ戻る](../../README.md)
