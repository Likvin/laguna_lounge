const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../ui/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: true,
    tsconfig: path.resolve(__dirname, "../tsconfig.json"),
  },
  "framework": "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "resolve-url-loader",
            "sass-loader",
        ],
        include: path.resolve(__dirname, "../"),
    });
    return config;
  },
}