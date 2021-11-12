## P60 161-0721-数据库的介绍

## P61 162-0721-mongodb 的安装以及服务的启动

## P62 163-0721-mongodb 的三个重要的概念 数据库 集合 文档

- 一般来说一个项目会用一个数据库
- 一个集合一般会用来保存一类数据

## P63 164-0721-数据库与集合的相关命令

--- dbs

1. 显示所有的数据库
   show dbs
   show databases

2. (创建)切换到指定的数据库
   use 数据库名

3. 显示当前所在的数据库
   db

4. 删除当前数据库(先切换再删除)
   use project_1
   db.dropDatabase()

--- collections

5. 显示当前数据库中的所有集合
   db.createCollection('books');
   show collections

6. 删除当前集合
   db.collection.drop()

7. 重命名集合
   db.books.renameCollection('newName')

## P64 165-0721-文档的相关命令

## P65 166-0721-mongoose 的介绍以及基本…

## P66 167-0721-mongoose 文档的批量插入

## P67 168-0721-mongoose 删除文档以及更…

## P68 169-0721-mongoose 文档的查询

## P69 170-0721-数据库增删改查的应用场景

## P70 171-0721-读取的扩展

## P71 172-0721 今日内容的复习

## P72 173-0723-nodejs-内容复习
