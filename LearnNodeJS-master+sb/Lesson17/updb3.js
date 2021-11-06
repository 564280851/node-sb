// Promise函数嵌套解决方法
function dbupAsync(sql) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(sql + " upd ok.");
      resolve(sql + ".ok");
    }, 800);
  });
  return p;
}

// 代码更加简洁的async/await
async function upAllDB() {
  const result1 = await dbupAsync("3.sql1"); // 3.sql1 upd ok.
  const result2 = await dbupAsync("3.sql2"); // 3.sql2 upd ok.
  const result3 = await dbupAsync("3.sql3"); // 3.sql3 upd ok.
  console.log(result1, result2, result3); // 3.sql1.ok 3.sql2.ok 3.sql3.ok
}
upAllDB();
