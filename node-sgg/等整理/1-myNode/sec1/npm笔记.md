## 查看命令

- npm -v //版本
- npm root//安装路径
- npm root -g//全局安装路径
- npm config list//查看配置信息

## 安装&更新

- npm init -y//初始化 ★★★★★
- npm i//按 package.json 中的配置来安装 ★★★★★

- npm list//已安装的包
- npm list -g

- npm view jquery versions//查看包的可用版本
-
- npm i jquery(默认加了--save/-s)
- npm i jquery -g
- npm i jquery@1.11.1//指定版本
- npm i webpack webpack-cli -D//开发依赖节点

- npm update jquery//更新最新版本
- npm xxx//运行脚本

## 卸载&清理包

- npm cache clean --force//#缓存目录(E:\programs \repo-node\npm-cache)
- npm uninstall jquery//#删除某个包,删除全局的-g
- npm uninstall jquery -g
- npm uninstall \*
- npm r jquery

## 常用包

- npm i nodemon

```使用淘宝镜像
方法1
npm config set registry https://registry.npm.taobao.org
npm config get registry
方法2：不使用
npm i -g nrm //nrm use taobao
```

```模板

```
