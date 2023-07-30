import { asset } from "$fresh/runtime.ts";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-linkedin.tsx";

export default function Hero() {
  return (
    <div
      class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white max-w-2xl shadow-md"
      style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.5)), url('/../bg.jpg');"
    >
      <div>
        <img
          class="rounded-full p-2 -mt-36 bg-white rounded-xl text-white max-w-32 max-h-32 shadow-md"
          src={asset("/profile.jpg")}
        />
      </div>
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">James Lane</h1>
        <p class="text-xl max-w-lg text-blue-100">
          Tech Lead, Vehicle Data @ <a href="https://www.cinch.co.uk">cinch</a>
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center">
        <a
          href="https://www.linkedin.com/in/james--lane/"
          class="block mt-4 text-blue-600 cursor-pointer inline-flex items-center group text-blue-800 bg-white px-8 py-2 rounded-md hover:bg-blue-50 font-bold"
        >
          <IconBrandLinkedin class="w-6 h-6" /> View my profile
        </a>
      </div>
    </div>
  );
}
