# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Firebase学習

▼ Firebase URL
https://firebase.google.com/

▼ 参考URL
Firebaseを使ってリアルタイムチャットを作成してみた
Firebaseの始め方：https://qiita.com/kohashi/items/43ea22f61ade45972881

▼ Firebaseとは
Googleが提供しているモバイル・Webアプリケーション向けのプラットフォーム。

● Firebaseができること
① Firebase Analytics
アプリケーションを利用するユーザの行動をデータ化し、プロダクトとマーケティングの最適化をするための判断材料に役立てることができる機能。

② Firebase Hosting
Webページやランディングページなどを素早くインターネット上に公開することができる機能。

③ Firebase Cloud Messaging
モバイルへの通知などを始めとした、メッセージをアプリケーションに配信する機能。

④ Cloud Firestore
グローバルなアプリケーション用に構築されたNoSQLデータベース。

※ NoSQL データベースとは
NoSQL データベースは、特定のデータモデル専用に設計されており、最新のアプリケーションを構築するための柔軟なスキーマを備えています。 NoSQL データベースは、開発、機能性、パフォーマンスを大規模かつ容易に実現できるという点で広く評価されています。

⑤ Cloud Functions for Firebase
サーバーレスでバックエンドを開発できる機能。

⑥ Firebase Authentication
安全な認証システムを簡単に構築することを目的とした機能。

⑦ Cloud Storage for Firebase
ユーザが作成した写真や動画などのコンテンツを保存・管理することができる機能。

● Firebaseを使用するメリット
① プラットフォームで管理する
Firebaseを利用したアプリケーションを構築することで、機能全てがFirebaseというプラットフォームで動作するため、簡単に管理のしやすいアプリケーションを構築することが可能。

② 機能が充実している
Firebaseはアプリケーションを構築するために必要な機能を完備。

③ データの同期が可能
Firebaseで構築可能なデータベースであるFirestoreでは、モバイル間でのデータの同期を簡単に行うことが可能。

④ 高速なアプリケーション構築
Firebaseによるアプリケーションのデプロイはどれも高速に行われ、ストレスを感じることなくアプリケーションの開発に専念できる。

⑤ モダンなフレームワークとの相性が良い
Vue.JS、Nuxt.JS、Reactを始めとするWebアプリケーションを構築するためのモダンフレームワークとの相性がよく、Firebase SDKを利用してスムーズにFirebaseを導入することができる。

▼ Firebase学習
【2022最新版】Firebase入門！Reactと連携してデータベース接続をしてみよう
https://www.youtube.com/watch?v=9NOg_HSbo9w


———————————————————————————
Reactの環境構築

▼ プロジェクトの作成
$ npx create-react-app {プロジェクト名} 

▼ プロジェクトの移動・起動
$ cd {プロジェクト名}
$ npm start

▼ prettier導入（コード整形のため）
$ npm install -D prettier

▼ .prettierrcの作成
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2
}

▼  package.jsonにフォーマット用の「npm-scripts」を追加
"scripts": {
    …
    "format": "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json}'"
  },

▼ フォーマット
$ npm run format

▼ 使用する可能性大（reactでページ遷移するときに使用）
$ npm install react-router-dom

——

Firebaseを触っていく
▼  Firebaseのインストール
$ npm install firebase

▼ Firebase プロジェクトの作成（Firebaseプロジェクトを作るを参考に）
https://jeannie-blog.online/create-firebase-project/

▼ 環境変数の設定
● .envファイルを以下の内容で作成（プロジェクトの概要の設定アイコン → プロジェクトの設定 → マイアプリのSDKの設定と構成のConfigを見ながら）
REACT_APP_FIREBASE_APIKEY=‘自身のapiKey’
REACT_APP_FIREBASE_AUTH_DOMAIN=‘自身の’authDomain
REACT_APP_FIREBASE_DATABASE_URL='https://PROJECT_ID.firebaseio.com' // PROJECT_ID = 自身のプロジェクトIDを記述
REACT_APP_FIREBASE_PROJECT_ID=‘自身の’projectId
REACT_APP_FIREBASE_STORAGE_BUCKET=‘自身の’storageBucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=‘自身の’messagingSenderId
REACT_APP_FIREBASE_APP_ID=‘自身の’appId

● .gitignoreに.envの記述を追加
…
# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
.env // 追加
…

▼ firebase.jsの作成
● firebase.jsを以下の内容で作成
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()

※ App.jsにて動作検証
「import { auth } from './firebase’」を記述し、App.js内で「console.log(auth);」を記述して、
Firebaseとの連携ができているか確認する。

▼ データベースの作成（Cloud Firestoreを作るを参考に）
https://jeannie-blog.online/create-firebase-project/


———————————————————————————

React + typescript環境構築
▼ 参考
https://qiita.com/sanogemaru/items/05c2e9381d6ba2d9fccf

▼ プロジェクトの作成
$ npx create-react-app {プロジェクト名} --template typescript

▼ プロジェクトの起動
$ cd {プロジェクト名}
$ npm start

▼ prettier導入（コード整形のため）
$ npm install -D prettier

▼ .prettierrcの作成
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2
}

▼  package.jsonにフォーマット用の7pm-scriptsを追加
"scripts": {
    …
    "format": "prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json}'"
  },

▼ フォーマット
$ npm run format

▼ ESLintの設定
https://qiita.com/yada-y/items/17e6a5db8e1fef21d9cf

▼ ESLintとprettierの干渉防止の設定を.eslintrc.jsonに追加
$ npm install -D eslint-config-prettier

↓

    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],


▼ .eslintrc.jsonに追加（JSX の記法は .tsx のファイルでは許されてないよということですが, TypeScript 版なので .tsx も許可するように設定）
"rules": {
  "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }]
}

ESLint参考
https://zenn.dev/ro_komatsuna/articles/eslint_setup
