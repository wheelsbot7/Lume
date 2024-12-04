import { merge } from "lume/core/utils/object.ts";
import basePath from "lume/plugins/base_path.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import date, { Options as DateOptions } from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import feed, { Options as FeedOptions } from "lume/plugins/feed.ts";
import metas from "lume/plugins/metas.ts";
import pagefind, { Options as PagefindOptions } from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import sitemap from "lume/plugins/sitemap.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import terser from "lume/plugins/terser.ts";
import lang_bash from "npm:highlight.js/lib/languages/bash";

import "lume/types.ts";

import tailwindOptions from "./tailwind.config.js";

export interface Options {
  date?: Partial<DateOptions>;
  pagefind?: Partial<PagefindOptions>;
  feed?: Partial<FeedOptions>;
}

export const defaults: Options = {
  feed: {
    output: ["/feed.xml", "/feed.json"],
    query: "type=post",
    info: {
      title: "=metas.site",
      description: "=metas.description",
    },
    items: {
      title: "=title",
    },
  },
};

/** Configure the site */
export default function(userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site
      .use(
        tailwindcss({
          extensions: [".html", ".jsx", ".vto"],
          options: tailwindOptions,
        })
      )
      .use(postcss())
      .use(
        codeHighlight({
          languages: {
            bash: lang_bash,
          },
          theme: {
            name: "github-dark-dimmed",
            path: "_includes/css/code_theme.css", // The destination filename
          },
        })
      )
      .use(basePath())
      .use(readingInfo())
      .use(date(options.date))
      .use(metas())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(terser())
      .use(pagefind(options.pagefind))
      .use(sitemap())
      .use(feed(options.feed))
      .use(
        esbuild({
          extensions: [".jsx"],
          options: {
            plugins: [],
            bundle: true,
            format: "esm",
            minify: true,
            keepNames: true,
            platform: "browser",
            target: "esnext",
            treeShaking: true,
            outdir: "./",
            outbase: ".",
          },
          esm: {
            cjsExports: {
              preact: ["Component"],
            },
          },
        })
      )
      .copy("fonts")
      .copy("js")
      .copy("data")
      .copy("favicon.png")
      .copy("uploads")
      .copy("/css/code_theme.css")
      .mergeKey("extra_head", "stringArray");

    // Alert plugin
    // site.hooks.addMarkdownItPlugin(alert);
  };
}
