const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  assetsDir:"assets",
  pages:{
    popup:{
      entry:"src/popup/index.js",
      template:"public/index.html",
      filename:"popup.html",
      title:"popup",
    },
    options:{
      entry:"src/options/index.js",
      template:"public/index.html",
      filename:"options.html",
      title:"options",
    }
  },
  configureWebpack: {
    plugins:[
      new CopyPlugin([
        {
          from:"src/manifest.json",
          to:"manifest.json"
        },
        {
          from:"src/background/index.js",
          to:"background.js"
        }
      ])
    ]
  }
};