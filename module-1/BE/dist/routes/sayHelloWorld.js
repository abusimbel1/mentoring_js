Object.defineProperty(exports, '__esModule', { value: true });
function sayHello(req, res) {
  res.statusCode = 200;
  res.send({ data: 'Hello' });
}
exports.default = sayHello;
