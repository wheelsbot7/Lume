import date, { Options as DateOptions } from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import terser from "lume/plugins/terser.ts";
import prism, { Options as PrismOptions } from "lume/plugins/prism.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import pagefind, { Options as PagefindOptions } from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed, { Options as FeedOptions } from "lume/plugins/feed.ts";
import {
  Options as ReadingInfoOptions,
  readingInfo,
} from "lume/plugins/reading_info.ts";
import { merge } from "lume/core/utils/object.ts";
// These plugins only seem to work with .md, not .mdx
// import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.1/toc.ts";
// import image from "https://deno.land/x/lume_markdown_plugins@v0.7.1/image.ts";
// import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.1/footnotes.ts";
import { alert } from "npm:@mdit/plugin-alert@0.13.1";
import jsx from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";

import "lume/types.ts";

export interface Options {
  prism?: Partial<PrismOptions>;
  date?: Partial<DateOptions>;
  pagefind?: Partial<PagefindOptions>;
  feed?: Partial<FeedOptions>;
  readingInfo?: Partial<ReadingInfoOptions>;
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
  readingInfo: {
    extensions: [".mdx"],
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site
      .use(tailwindcss())
      .use(postcss())
      .use(basePath())
      // .use(toc())
      .use(prism(options.prism))
      .use(readingInfo(options.readingInfo))
      .use(date(options.date))
      .use(metas())
      // .use(image())
      // .use(footnotes())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(terser())
      .use(pagefind(options.pagefind))
      .use(sitemap())
      .use(feed(options.feed))
      .use(jsx())
      .use(mdx())
      .copy("fonts")
      .copy("js")
      .copy("favicon.png")
      .copy("uploads")
      .mergeKey("extra_head", "stringArray")
      .preprocess([".mdx"], (pages) => {
        for (const page of pages) {
          page.data.excerpt ??= (page.data.content as string).split(
            /:::more\s*([\s\S]+?)\s*:::more/,
          )[0];
        }
      });

    // Alert plugin
    site.hooks.addMarkdownItPlugin(alert);

    // Mastodon comment system
    site.remoteFile(
      "/js/comments.js",
      "https://unpkg.com/@oom/mastodon-comments@0.2.2/src/comments.js",
    );
  };
}
