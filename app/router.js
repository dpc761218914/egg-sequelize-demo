'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //获取所有blog
  router.get('/getAllArticles', controller.article.getAllArticles);
  //根据id获取文章信息
  router.get('/getOneArticleById/:id', controller.article.getOneArticleById);
  //添加文章
  router.post('/postCreateArticle', controller.article.postCreateArticle);
   //删除文章
  router.get('/delOneArticleById/:id', controller.article.delOneArticleById);


  //添加管理员，添加过程中中email有唯一性认证
  router.post('/postCreateAdmin', controller.admin.postCreateAdmin);
  //获取所有
  router.get('/getAllAdmins', controller.admin.getAllAdmins);
  //根据id获取
  router.get('/getOneAdminById/:id', controller.admin.getOneAdminById);
  //根据id删除
  router.get('/delOneAdminById/:id', controller.admin.delOneAdminById);



  //原生sql查询获取所有admin
  router.get('/getAllAdminsBySQL', controller.admin.getAllAdminsBySQL);
  router.get('/getOneAdminByIdBySQL/:id', controller.admin.getOneAdminByIdBySQL);



};
