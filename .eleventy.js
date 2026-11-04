module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("lyrian_scribe_site/**");
  eleventyConfig.addFilter("slug", (value = "") => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
  eleventyConfig.addFilter("date", (value, format = "dd/MM/yyyy", locale = "pt-BR") => {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    if (format === "yyyy-MM-dd") return date.toISOString().slice(0, 10);
    const options = format === "yyyy-MM-dd"
      ? { year: "numeric", month: "2-digit", day: "2-digit" }
      : { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat(locale, { ...options, timeZone: "UTC" }).format(date);
  });
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("blog.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("images");
  // Decap CMS loads its configuration from /admin/config.yml at runtime.
  // Eleventy does not copy YAML files automatically, so publish the admin directory as-is.
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addCollection("publishedPosts", (api) =>
    api.getFilteredByGlob("content/blog/**/*.md")
      .filter((post) => !post.data.draft)
      .sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("categories", (api) => {
    const categories = new Set();
    api.getFilteredByGlob("content/blog/**/*.md")
      .filter((post) => !post.data.draft)
      .forEach((post) => (post.data.categories || []).forEach((category) => categories.add(category)));
    return [...categories].sort((a, b) => a.localeCompare(b, "pt-BR"));
  });
  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
