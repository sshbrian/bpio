// @ts-check
import { defineConfig } from 'astro/config';
// https://astro.build/config
import icon from "astro-icon";

export default defineConfig({
  integrations: [icon()],
});
