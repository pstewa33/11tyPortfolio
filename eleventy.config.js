const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
    
eleventyConfig.addFilter("regexFindAll", function (content, pattern) {
  if (!content) return [];

  let regex;
  try {
    regex = new RegExp(pattern, "g");
  } catch (e) {
    return [];
  }

  const matches = [];
  let match;

  while ((match = regex.exec(content)) !== null) {
    matches.push(match);
  }

  return matches;
});



    const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: false,
    slugify: s =>
      s
        .toLowerCase()
        .trim()
        .replace(/[^\w]+/g, "-")
  });

  eleventyConfig.setLibrary("md", md);

    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    
    return {
        dir: {
            input: "src",
            output: "public",
        }
    }
}