const server = require('./server');

server(80,
    (req, res) => {
        res.end('ok');
    },
    () => {
        console.log('服务已经启动');
    })