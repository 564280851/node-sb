## 课件地址

http://www.jspang.com/detailed?id=79#toc354

## 01.Egg.js 介绍和 HelloWorld 程序

## 02.Egg.js 项目结构介绍

## 03.Controller 控制器的使用

Controller 负责解析用户的输入，处理后返回相应的结果。但是由于开发形式的不同，Controller 的具体作用还是有一些区别的。

- 在 RESTful 接口中，Controller 接受用户的参数，从数据库中查找内容返回给用户或者将用户的请求更新到数据库中。
- //crud
- 在 HTML 页面请求中，Controller 根据用户访问不同的 URL，渲染不同的模板得到 HTML 返回给用户。
- //render
- 在代理服务器中，Controller 将用户的请求转发到其它服务器上，并将其它服务器的处理结果返回给用户。
- //proxy

## 04.Egg.js 单元测试介绍

- 所有的测试代码，都需要放在/test 目录下面。
- 如果是 Controller 相关的代码就需要放在/test/app/controller 文件夹下面。
- 所有的测试文件都需要以.test.js 为后缀的。

## 05.Get 请求和参数传递

## 06.POST 请求和参数的接收

## 07.Service 服务的编写

Service 用来编写和数据库直接交互的业务逻辑代码。
好处

- 保持 Controller 中的逻辑更加简介。
- 保持业务逻辑的独立性，抽象出来的 Service 可以被多个 Controller 调用。
- 将逻辑和展现分离，更容易编写测试用例。

## 08.View 中使用 EJS 模板引擎-1

## 09.View 中使用 EJS 模板引擎-2

## 10.View 中使用 EJS 模板引擎-3

- 公共代码片段的使用 html
- 配置静态资源 css

## 11.Cookie 的增删改查

## 12.Cookie 的配置和加密
