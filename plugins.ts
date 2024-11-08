import date, { Options as DateOptions } from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import prism, { Options as PrismOptions } from "lume/plugins/prism.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import pagefind, { Options as PagefindOptions } from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed, { Options as FeedOptions } from "lume/plugins/feed.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import { merge } from "lume/core/utils/object.ts";
import image from "https://deno.land/x/lume_markdown_plugins@v0.7.1/image.ts";
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.1/footnotes.ts";
import esbuild from "lume/plugins/esbuild.ts";
import remark from "lume/plugins/remark.ts";
import remarkToc from "https://esm.sh/remark-toc@9.0.0";
import remarkGfm from "https://esm.sh/remark-gfm@4.0.0";

import "lume/types.ts";

export interface Options {
  prism?: Partial<PrismOptions>;
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
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site
      .use(postcss())
      .use(basePath())
      .use(prism(options.prism))
      .use(readingInfo())
      .use(date(options.date))
      .use(metas())
      .use(image())
      .use(footnotes())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(terser())
      .use(pagefind(options.pagefind))
      .use(sitemap())
      .use(feed(options.feed))
      .use(remark({
        remarkPlugins: [remarkToc, remarkGfm],
      }))
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
              "preact": ["Component"],
            },
          },
        }),
      )
      .copy("fonts")
      .copy("js")
      .copy("data")
      .copy("favicon.png")
      .copy("uploads")
      .mergeKey("extra_head", "stringArray")
      .preprocess([".md"], (pages) => {
        for (const page of pages) {
          page.data.excerpt ??= (page.data.content as string).split(
            /<!--\s*more\s*-->/i,
          )[0];
        }
      });

    // Alert plugin
    // site.hooks.addMarkdownItPlugin(alert);
  };
}
