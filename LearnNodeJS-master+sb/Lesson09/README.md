# npm 包管理器

## 知识点

- npm 的使用方法
- ejs 的安装

npm 是 Node.js 附带的第三方软件包管理器，可以为 Node.js 提供更多的功能支持。

## npm 官网

https://npmjs.org/

## ejs(Effective JavaScript templating)

http://ejs.co/

## 实战演习

```bash
% npm install ejs
```

### helo.ejs

```html
<html>
  <title><%= title %></title>
  <body>
    <%- content %>
  </body>
</html>
```

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com

```
Tags
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

    <%- content %>
        <!-- 渲染输出 -->
    <%= content %>
        <!-- 源码输出 -->
```
