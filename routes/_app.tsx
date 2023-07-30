import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html class="bg-gray-100 h-screen">
      <body class="flex p-4 bg-gray-100 justify-center items-center flex-col w-screen h-screen">
        <Head>
          <title>jameslane.co.uk</title>
          <link rel="stylesheet" href="/styles.css" />
        </Head>
        <Component />
      </body>
    </html>
  );
}
