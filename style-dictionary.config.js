const StyleDictionary = import("style-dictionary");

module.exports = {
  source: ["tokens.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "projects/ui-core/src/styles/tokens/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "projects/ui-core/src/styles/tokens/",
      files: [
        {
          destination: "tokens.ts",
          format: "javascript/es6",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "projects/ui-core/src/styles/tokens/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};
