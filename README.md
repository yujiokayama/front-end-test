This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## ディレクトリ構造

```
src
└── app
    ├── __test__
    │   ├── components
    │   │   ├── atoms
    │   │   │   └── Button.test.tsx
    │   │   └── molecules
    │   │       ├── AsyncComponent.test.tsx
    │   │       └── Form.test.tsx
    │   ├── hooks
    │   │   └── useCounter.test.tsx
    │   └── utils
    │       ├── async_func.test.ts
    │       ├── calc.test.ts
    │       ├── divide.test.ts
    │       ├── groupe.test.ts
    │       ├── matcher_func.test.ts
    │       ├── mock_called.test.ts
    │       ├── mock_func.test.ts
    │       ├── mock_module.test.ts
    │       ├── mock_returen.test.ts
    │       ├── mock_spy.test.ts
    │       ├── setup_teardown.test.ts
    │       └── shop.test.ts
    ├── components
    │   ├── atoms
    │   │   └── Button.tsx
    │   ├── molecules
    │   │   ├── AsyncComponent.tsx
    │   │   └── Form.tsx
    │   └── organisms
    ├── favicon.ico
    ├── globals.css
    ├── hooks
    │   └── useCounter.tsx
    ├── layout.tsx
    ├── page.module.css
    ├── page.tsx
    ├── test
    │   └── page.tsx
    ├── ui
    │   └── page.tsx
    └── utils
        ├── async_func.ts
        ├── calc.ts
        ├── divide.ts
        ├── mock_module.ts
        ├── mock_spy.ts
        └── shop.ts

```

## UI テスト

- 正しい出力の描画
- ユーザーインタラクションの反応
- コンポーネントのライフサイクル
- props の伝達
- 子コンポーネントの描画

### UI テストの種類

#### ユニットテスト

- 個々のコンポーネントが期待通り動作するか

#### スナップショットテスト

- コンポーネントのレンダリング結果に意図しない変更がないかを検証(DOM レベルの比較)

#### ビジュアルリグレッションテスト

- 画面に表示された UI のスクリーンショットに意図しない変更がないかを検証(実際の画面のスクリーンショット)

#### E2E テスト

- ユーザーの操作をシミュレート

### テストツールとライブラリ

- ユニットテスト・スナップショット
  - Jest + Testing Library
- ビジュアルリグレッションテスト
  - Storybook + Chromatic
- E2E テスト
  - Playwright

## JEST

・install

```
yarn add -D jest @types/jest ts-jest
```

### 対象のファイルのみテストする

```
yarn jest xxx.test
```

## Testing Library

・install

```
yarn add -D @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom ts-jest babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript
```

@testing-library/dom を install しないと testing-library/react から screen を import できなかった、謎

・babel.config.js

```
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
```

## Playwright

・install

```
yarn create playwright
```

・package.json

```
  "scripts": {
    "playwright": "playwright test",
    "playwright:ui": "playwright test --ui",
    "playwright:headed": "playwright test --headed",
    "playwright:report": "playwright show-report"
  },
```

### Playwright実行

- **playwright**: `playwright test`

  - デフォルトでは、ヘッドレスモード（ブラウザの UI を表示しないモード）でテストが実行。

- **playwright:ui**: `playwright test --ui`

  - テストの実行状況を視覚的に確認しながらデバッグすることができる。

- **playwright:headed**: `playwright test --headed`

  - ヘッドレスモードではなく、ブラウザの UI を表示してテストを実行する。テストの実行中にブラウザの動作を確認することができる。

- **playwright:report**: `playwright show-report`
  - テスト結果のレポートを表示する。
