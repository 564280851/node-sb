## 跨域问题
https://www.bilibili.com/video/BV1gt411S78C?from=search&seid=12699323221837185333&spm_id_from=333.337.0.0
```
<!-- 1 -->
npm i cors
<!-- 2 -->
app.use(require("cors")());
<!-- 3 -->
<body>
    <h1>sb</h1>
    <script>
        fetch('http://127.0.0.1/array').then(res => res.json()).then(data => console.log(data))
    </script>
</body>
```
