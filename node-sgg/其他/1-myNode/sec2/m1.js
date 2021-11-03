function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

// 多个函数
module.exports = {
  // 写法1
  // add:add,
  // minus:minus

  // 写法2,简写
  add,
  minus,
};
