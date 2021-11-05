## yarn 的安装&国内镜像

```
- npm install -g yarn

- yarn config get registry
- yarn config set registry https://registry.npm.taobao.org/

【参考】https://learnku.com/articles/15976/yarn-accelerate-and-modify-mirror-source-in-china
```

## yarn 新建 egg 项目

```
- yarn create egg  --type=simple//创建一个egg项目
- yarn install//安装相关的项目依赖。
- yarn dev//开启项目(保存自动更新)
```

## CSRF

1. CSRF 安全策略，学习阶段，我们可以关闭掉这个选项。
2. CSRF 的全名为 Cross-site request forgery， 它的中文名为 伪造跨站请求。
3. 目的：为了使用 restful client 插件

/config/config/default.js 文件

```js
config.security = {
  csrf: {
    enable: false,
  },
};
```

## 使用 egg-view-ejs

yarn add egg-view-ejs

/config/plugin.js 文件

```js
exports.ejs = {
  enable: true,
  package: "egg-view-ejs",
};
```

/config /config.default.js 文件

```js
config.view = {
  mapping: {
    ".html": "ejs",
  },
};

config.ejs = {};
```
