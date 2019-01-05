'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  // 获取所有文章数据
  async getAllArticles() {
    const { ctx } = this;
    const articles = await ctx.service.article.findAll(0, 0);
      ctx.body = {
          data: articles,
      };
      ctx.status = 200;
      ctx.username='data'
  }

  // 根据id获取文章
  async getOneArticleById() {
    const { ctx } = this;
    const id = ctx.params.id;
    const resourceData = await ctx.service.article.findById(id);
      ctx.body = {
          data: resourceData,
      };
      ctx.status = 200;
      ctx.username='data'
  }

    // 通过postman添加一个文章
    async postCreateArticle() {
        const { ctx } = this;
        const model = ctx.request.body;

        await ctx.service.article.insertOne(model);

        ctx.body = {
            msg: '新增成功',
        };
        ctx.status = 201;
    }

    // 根据id删除文章
    async delOneArticleById() {
        const { ctx } = this;
        const id = ctx.params.id;
        console.log("id=="+id);
        const data=await ctx.service.article.deleteOne(id);
        console.log("data=="+data);

        ctx.body = {
            msg: '删除成功',
        };
        ctx.status = 200;
    }
}

module.exports = ArticleController;
