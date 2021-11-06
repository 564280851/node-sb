let list = [10, 20, 30];
let mystr = "你好啊";
let mymap = new Map();
mymap.set("JS", "Javascript");
mymap.set("PL", "Perl");
mymap.set("PY", "Python");

for (let val of list) {
  console.log(val);
}

for (let val of mystr) {
  console.log(val);
}

for (let [key, value] of mymap) {
  console.log(key, value);
}

let it = mymap.values();
console.log(it); //[Map Iterator] { 'Javascript', 'Perl', 'Python' }
let tmp;
while ((tmp = it.next())) {
  if (tmp.done) break; //不可遍历时，退出循环
  console.log(tmp);
  //console.log(tmp.value, tmp.done);
}
