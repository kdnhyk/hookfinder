import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="kdnhyk@gmail.com" />
        <meta name="description" content="React Hook&Component" />
        <meta name="keywords" content="react, hook, component, api "></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="../public/assets/HookFinder.ico" />
        <link rel="shortcut icon" href="../public/assets/HookFinder.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
