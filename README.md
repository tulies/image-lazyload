# image-lazyload
图片延迟加载插件

参考：现代浏览器观察者 Observer API 指南

https://www.jianshu.com/p/84a86e41eb2b
npm publish --access=public


``` json
{
  "presets": [
    [
      "@babel/preset-env", {
        "modules": false,
        "targets": {
          "ie": "10"
        },
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime", {
      "corejs": 3
  }]
  ]
}

```
