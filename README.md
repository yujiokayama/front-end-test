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
src/app
├── __test__
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
│   ├── molecules
│   └── organisms
├── favicon.ico
├── globals.css
├── layout.tsx
├── page.module.css
├── page.tsx
├── test
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

```
yarn add -D jest @types/jest ts-jest
```

### 対象のファイルのみテストする

```
yarn jest xxx.test
```

## Testing Library

```
yarn add -D @testing-library/react @testing-library/jest-dom @testing-library/dom @testing-library/user-event jest jest-environment-jsdom ts-jest babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript
```
