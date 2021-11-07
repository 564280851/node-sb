## P10 110-0719-npm 介绍

package.json 包的配置文件
package-lock.json 锁文件,用来固定包的版本
node_modules 下载包的存放目录

npm init -y★★★★★
npm i <package>

## P11 112-0719-npm 初始化与包的安装

## P12 113-0719-npm 包的-iА 式-r...

## P13 114-0719-npm 安装工具包的二次使用

npm config set registry https://registry.npm.taobao.org

npm i lodash

const _= require('lodash');
console.log(_.random(1,100))//产生随机数

## P14 115-0719-开发依赖与生产依赖演示

npm i babel -D

-S (--save) 生产依赖 默认选项 package.json 中 dependencies 属性
-D (--save-dev) 开发依赖 package.json 中 devDependencies 属性

- require 引入

## P15 116-0719-全局安装-g 选项

npm i less -g
npn i nodemon -g
nodemon <文件名>

- 通常在命令行使用

## P16 117-0719-vscode 运行 nodemon 报错...

1. 管理员身份打开 powershell
2. 运行 set-ExecutionPolicy RemoteSigned
3. 输入 Y 敲回车
4. 重启 vscode

## P17 118-0719-环境变量 path 配置

## P18 119-0719-npm 协作的注意-npm-i 以及卸载包

npm i
npm r <package> (-g)

## P19 120-0719-cnpm 的介绍与演示

//淘宝镜像
npm config set registry https://registry.npm.taobao.org
//官方镜像 I
npm config set registry https://registry.npmjs.org/

## P20 121-0719-yarn 的介绍以及安装

yarn 相比于 npm 有几个特点

- 本地缓存。安装过的包下次不会进行远程安装
- 并行下载。一次下载多个包,而 npm 是串行下载
- 精准的版本控制。保证每次安装跟上次都是一样的

1. npm i yarn -g(此方法，全局安装的包，不能使用，原因没有权限修改环境变量)
2. 官网安装包安装

## P21 122-0719-yarn 的相关命令

yarn init
yarn -v
yarn (global) add <package> (--dev)
yarn (global) dir
yarn (global) remove <package>
yarn list
yarn //安装 package.json 的所有依赖

yarn config set registry https://registry.npm.taobao.org

## P22 123-0719-包管理工具的附录-指定安装-清理缓存-运行脚本

npm cache clean//如果遇到『npm i 包名』失败

npm run [alias]
yarn run [alias]

## P23 124-0719-包管理工具的补充说明

npm yarn 尽量「不要混着用」

## P24 125-0719-包管理工具的补充扩展

Java-maven
python-pip
PHP-composer

Linux

- yum //yum install nodejs
- apt-get //apt-get install nodejs

Windows

- chocolaty //choco install chrome

## P25 126-0719-今日内容总结

## P26 127-0720-nodejs-包管理工具的复习

---

## 其他命令

npm -v //版本
npm root (-g)//安装路径
npm config list//查看配置信息
npm update <package>
npm config get registry
npm uninstall \*
npm list (-g)
