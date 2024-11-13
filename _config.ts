import toc from "https://deno.land/x/lume_markdown_plugins@v0.6.0/toc/mod.ts";
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.1/footnotes.ts";
import image from "https://deno.land/x/lume_markdown_plugins@v0.7.1/image.ts";
import lume from "lume/mod.ts";
import { alert } from "npm:@mdit/plugin-alert@0.8.0";
import { full as emoji } from "npm:markdown-it-emoji";
import imageFigures from "npm:markdown-it-image-figures";
import plugins from "./plugins.ts";

const markdown = {
  plugins: [toc, footnotes, image, alert, emoji, [imageFigures, { lazy: true, async: true , figcaption: true}]],
  options: {
    linkify: true,
  },
};

const site = lume({
  src: "./src",
  location: new URL("https://www.wheelsbot.dev"),
}, { markdown });

site.use(plugins());

export default site;
