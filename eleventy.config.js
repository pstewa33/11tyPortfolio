const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
    
  // Collection for pages you want in the nav
  eleventyConfig.addCollection("navPages", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.nav) // only pages where nav: true in front matter
      .sort((a, b) => a.data.navOrder - b.data.navOrder || 0); // optional ordering
  });

  // Case study collections
  eleventyConfig.addCollection("caseStudies", function (collectionApi) {
  return collectionApi.getFilteredByGlob("src/case-studies/*.md")
    .sort((a, b) => {
      return (a.data.order || 0) - (b.data.order || 0);
    });
});


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
            data: "_data",
        }
    }
}