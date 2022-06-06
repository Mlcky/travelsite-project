module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  publicPath: process.env.NODE_ENV === "production" ? "/travelsite-project/" : "/"
}
