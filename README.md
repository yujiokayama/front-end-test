## 参考サイト

```
・アトミックデザイン
https://udemy.benesse.co.jp/design/web-design/atomic-design.html

・Next.js のディレクトリ構成
https://zenn.dev/hokuto_tech/articles/fdabaff60f5af2

・MUI
https://udemy.benesse.co.jp/development/mui.html

```

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
├─ src/app/
├─ components/
├─ components/
│  ├─ elements/
│  │  └─ Button
│  │     └─ Button.tsx
│  └─ layouts/
│     └─ Header
│        └─ Header.tsx
├─ features/
│  └─ post/
│     ├─ api/
│     │  └─ getPost.ts
│     ├─ styles/
│     ├─ components/
│     │  ├─ Post.tsx
│     │  └─ Posts.tsx
│     ├─ hooks/
│     │  └─ usePost.ts
│     └─ types/
│        └─ index.ts
├─ hooks/
├─ styles/
├─ types/
├─ libs/
├─ utils/
└─ test/
   ├─ components/
   │  ├─ elements/
   │  │  └─ Button.test.tsx
   │  └─ layouts/
   │     └─ Header.test.tsx
   ├─ features/
   │  └─ post/
   │     ├─ api/
   │     │  └─ getPost.test.ts
   │     ├─ components/
   │     │  ├─ Post.test.tsx
   │     │  └─ Posts.test.tsx
   │     ├─ hooks/
   │     │  └─ usePost.test.ts
   └─ utils/
      └─ someUtil.test.ts
```

## JEST

### 対象のファイルのみテストする

```
yarn jest xxx.test.ts
```
