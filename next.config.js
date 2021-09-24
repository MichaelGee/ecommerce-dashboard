const withFonts = require('next-fonts');

module.exports = {
  reactStrictMode: false,
}


module.exports = withFonts({
   enableSvg: true,
   webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
     return config;
   }
});