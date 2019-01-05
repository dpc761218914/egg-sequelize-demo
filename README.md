egg和egg-sequelize搭配使用，连接mysql

导入项目，安装依赖
### 1、 修改config.default.js中的mysql连接的账号和密码
### 2、 在mysql中建立nodesql数据库
### 3、 启动项目，通过postman测试各增删改查接口。（如果无法自动创建表，可以将database中的sql文件在nodesql中执行）
参考源：https://github.com/TeanBlog/TeanBlog

### 4、测试egg-sequelize和原生sql语句搭配使用，没有问题。（参考：https://segmentfault.com/q/1010000013912266）
> 原生sql查询所有admin信息
         const articles = await ctx.app.model.query('select * from admins', {type:'SELECT'});
         const articles = await ctx.app.model.query('select * from admins where id ="'+id+'"'  , {type:'SELECT'});


测试，这里以获取所有admin信息为例：
![QQ截图20190105161410.jpg](https://upload-images.jianshu.io/upload_images/2227968-3661806e65812ec0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![QQ截图20190105161422.jpg](https://upload-images.jianshu.io/upload_images/2227968-73839699abf31985.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![QQ截图20190105161431.jpg](https://upload-images.jianshu.io/upload_images/2227968-18f2782ad77300ee.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)