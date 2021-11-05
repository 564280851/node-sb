/* 
const http = require('http');
const server = http.createServer((request, response)=>{
});
server.listen(80,() => {
}) ;
*/

module.exports = function (port, callback, fn) {
    const http = require('http');
    const server = http.createServer(callback);
    server.listen(port, fn)
}