module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-px-to-viewport": {
      "unitToConvert": "px",
      "viewportWidth": 375,
      "unitPrecision": 3,
      "viewportUnit": "vw",
      "minPixelValue": 1,
      "selectorBlackList": [
        ".ignore",
        ".hairlines"
      ]
    }
  }
}