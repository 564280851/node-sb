const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.headers);

  let url = new url(req.url, "http://127.0.0.1");
  let pathname = url.pathname;
  let keyword = url.searchParams.get("keyword");

  console.log(url);
  console.log(pathname);
  console.log(keyword);

  console.log(res.statusCode);
  console.log(res.statusMessage);

  //   res.setHeader();
  //   res.write();
  res.end("ok");
});

// http://127.0.0.1
server.listen(80);
