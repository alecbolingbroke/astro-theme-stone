import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import lottie from "astro-integration-lottie";


// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind(), compress(), lottie()],
});
