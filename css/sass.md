```
"scripts": {
    "start": "run-p watch server",
    "sass": "sass scss:css",
    "sass-c": "npm run sass -- --style=compressed",
    "sass-no": "npm run sass -- --no-source-map",
    "sass-wc": "npm run sass -- --watch --style=compressed",
    "watch": "npm run sass -- --watch",
    "server": "live-server --port=8090",
    "clean": "rimraf css build"
  },

```
