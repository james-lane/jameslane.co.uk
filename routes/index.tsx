import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Hero from "../components/Hero.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="flex bg-gray-100 justify-center items-center flex-col w-screen h-screen">
      <Head>
        <title>jameslane.co.uk</title>
      </Head>
      <Hero />
    </div>
  );
}
