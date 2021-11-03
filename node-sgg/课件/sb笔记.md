## P1 101-0717-GET与POST请求区别
### GET和POST的区别
GET和POST是HTTP协议请求的两种方式
- GET主要用来获取用数据, POST主要用来提交数据
- GET带参数请求是将参数缀到URL之后,在地址栏输入url访问网站就是GET请求,POST带参数请求是将参数放到请求体中
- POST请求[相对]GET安全一些,因为在浏览器中参数会暴露在地址栏,可以使用HTTPS证书提高安全性
- GET请求大小有限制,一般为2k,而POST请求则没有大小限制
- GET类型报文请求方法的位置为GET, POST类型报文请求方法为POST

### GET和POST使用场景
GET请求的情况
- 在地址栏直接输入url访问
- 点击a连接
- link标签引入css
- script 标签引入js
- img标签引入图片
- form表单<form method="get">
- AJAX GET请求

post请求的情况
- form表单<form method="POST">
- AJAX POST请求



## P2 102-0717-chrome控制台查看请求与响应报文
[chrome]-[inspect]-[header]+[preview]+[response]

## P3 103-0717-chrome查看请求体的内容

P4 104-单词汇总
P5 105-0719-内容复习
P6 106-0719-数据表格的作业
P7 107-0719-页面中css资源的抽离
P8 108-0719-文件资源的请求响应
P9 109-0719-数据列表显示的练习
P10 110-0719-npm介