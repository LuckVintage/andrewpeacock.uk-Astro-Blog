import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";
import type { Root } from "mdast";
import type { VFile } from "vfile";

export function remarkReadingTime() {
  return function (tree: Root, file: VFile) {
    const textOnPage = toString(tree);
    const readingTimeResult = getReadingTime(textOnPage);
    
    const data = file.data as any;
    data.astro = data.astro || {};
    data.astro.frontmatter = data.astro.frontmatter || {};
    
    // This exact variable gets bundled into the background compiler state
    data.astro.frontmatter.readingTime = readingTimeResult.text;
  };
}