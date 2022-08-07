# フロントエンド

## フロントエンドのプロジェクト構成
(主要なもののみ記載)

```
frontend
├── graphql … GraphQLスキーマ
│   ├── codegen.yaml … 自動コード生成設定
│   └── schema.graphql … GraphQLスキーマ
├── src
│   ├── components
│   │   ├── hoc … 汎用的な高階コンポーネント
│   │   ├── layouts … レイアウトに関わるもの(Headerとかもここ)
│   │   ├── pages … ページ(src/pagesから参照)
│   │   ├── ui … ページやレイアウトから参照するコンポーネント全般(StatelessでもStatefulでも可)
│   ├── hooks … React Hooks(今は使っていない)
│   ├── lib … ビジネスロジックやライブラリ系全般
│   │   └── graphql … GraphQLまわり
│   │       └── __generated__ … GraphQL Codegenで自動生成されたコード(触らない)
│   ├── pages … Next.jsのページとAPI
│   │   └── api … APIエンドポイント
│   ├── stores … Recoilストア
│   │   └── __generated__ … Recoil Relayで自動生成されたクエリの型情報(触らない)
│   ├── middleware.ts … NextAuth関連
│   ├── theme.ts … グローバルテーマ
```

### コンポーネントの利用ルール

- pages/*
    - components/pages、components/hoc、hooksを参照可
    - ロジックは極力書かない
- components/pages/*
    - components、hooks、stores を参照可
    - ページ全体に関わるロジックはここに書く
- components/ui/*
    - components/ui、components/elements、components/ui、hooks/、stores/を参照可
    - ステートフルなコードを書いても可
- components/elements
    - components/elementsのみ参照可能
    - ステートは使わずに全てprops経由で渡す