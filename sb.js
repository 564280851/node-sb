const http = require("http");

const server = http.createServer((req, res) => {
  res.end("ok111");
});

// http://127.0.0.1
server.listen(80);
