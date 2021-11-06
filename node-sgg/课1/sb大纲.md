## P1 101-0717-GET 与 POST 请求区别

### GET 和 POST 的区别

GET 和 POST 是 HTTP 协议请求的两种方式

- GET 主要用来获取用数据, POST 主要用来提交数据
- GET 带参数请求是将参数缀到 URL 之后,在地址栏输入 url 访问网站就是 GET 请求,POST 带参数请求是将参数放到请求体中
- POST 请求[相对]GET 安全一些,因为在浏览器中参数会暴露在地址栏,可以使用 HTTPS 证书提高安全性
- GET 请求大小有限制,一般为 2k,而 POST 请求则没有大小限制
- GET 类型报文请求方法的位置为 GET, POST 类型报文请求方法为 POST

### GET 和 POST 使用场景

GET 请求的情况

- 在地址栏直接输入 url 访问
- 点击 a 连接
- link 标签引入 css
- script 标签引入 js
- img 标签引入图片
- form 表单<form method="get">
- AJAX GET 请求

post 请求的情况

- form 表单<form method="POST">
- AJAX POST 请求

## P2 102-0717-chrome 控制台查看请求与响应报文

[chrome]-[inspect]》》》[[header]+[preview]+[response]

## P3 103-0717-chrome 查看请求体的内容

## P4 104-单词汇总-略

## P5 105-0719-内容复习-略

---

## P6 106-0719-数据表格的作业

## P7 107-0719-页面中 css 资源的抽离

## P8 108-0719-文件资源的请求响应-略-太长

## P9 109-0719-数据列表显示的练习

[练习]-代码
