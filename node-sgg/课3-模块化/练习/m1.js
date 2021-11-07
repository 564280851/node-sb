function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

// 暴露多个函数-写法1
module.exports = {
  add,
  minus,
};

// 暴露多个函数-写法2
// module.exports = {
//   add: add,
//   minus: minus,
// };

// 只暴露1个函数
// module.exports = add;
