# 模块化设计

## 知识点

- 建立一个模块
- 调用模块功能

## 实战演习

### math.mjs

```js
function add(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

export { add, minus };
```

### main.mjs

```js
// 引用1
import { add, minus } from "./math.mjs";

console.log(add(10, 20));
console.log(minus(30, 20));
```

```js
// 引用2
import * as math from "./math.mjs";

console.log(math.add(10, 20));
console.log(math.minus(30, 20));
```

### 执行方法

```bash
node --experimental-modules main.mjs
```

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
