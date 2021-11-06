// 引用1 { add, minus }
// import { add, minus } from "./math.mjs";

// console.log(add(10, 20));
// console.log(minus(30, 20));
// -----------------------------------------
// 引用2 * as math
import * as math from "./math.mjs";

console.log(math.add(10, 20));
console.log(math.minus(30, 20));
