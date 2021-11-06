# 你写我读 HTML

## 知识点

- fs 文件读写模块的引用

## 实战演习

### index.html

```html
<html>
  <body>
    <h1>Helo index.html!</h1>
  </body>
</html>
```

### myserver.js

```javascript
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile(__dirname + "/index.html", "utf-8", function (err, data) {
    if (err) {
      //把文件中index改成index2，会有错误
      res.setHeader("Content-Type", "text/plain");
      res.statusCode = 404;
      res.end("Not Founded.");
    } else {
      res.setHeader("Content-Type", "text/html"); //返回网页
      // res.setHeader("Content-Type", "text/plain");//返回源码
      res.statusCode = 200;
      res.end(data);
    }
  });
});

const hostname = "127.0.0.1";
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## 课程文件

https://gitee.com/komavideo/LearnNodeJS

## 小马视频频道

http://komavideo.com
