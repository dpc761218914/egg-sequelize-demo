'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {


    // 通过postman添加一个文章
    async postCreateAdmin() {
        const { ctx } = this;
        const model = ctx.request.body;
        await ctx.service.admin.insertOne(model);
        ctx.body = {
            msg: '新增成功',
        };
        ctx.status = 201;
    }


    // 获取所有文章数据
    async getAllAdmins() {
        const { ctx } = this;
        const articles = await ctx.service.admin.findAll(0, 0);
        ctx.body = {
            data: articles,
        };
        ctx.status = 200;
        ctx.username='data'
    }

    // 根据id获取文章
    async getOneAdminById() {
        const { ctx } = this;
        const id = ctx.params.id;
        const resourceData = await ctx.service.admin.findById(id);
        ctx.body = {
            data: resourceData,
        };
        ctx.status = 200;
        ctx.username='data'
    }

    // 根据id删除文章
    async delOneAdminById() {
        const { ctx } = this;
        const id = ctx.params.id;
        console.log("id=="+id);
        const data=await ctx.service.admin.deleteOne(id);
        console.log("data=="+data);

        ctx.body = {
            msg: '删除成功',
        };
        ctx.status = 200;
    }

    // 原生sql查询所有admin信息
    async getAllAdminsBySQL() {
        const { ctx } = this;
        const articles = await ctx.app.model.query('select * from admins', {type:'SELECT'});
        ctx.body = {
            data: articles,
        };
        ctx.status = 200;
        ctx.username='data'
    }

    // 原生sql查询所有admin信息
    async getOneAdminByIdBySQL() {
        const { ctx } = this;
        const id = ctx.params.id;
        //如果直接写成'select * from admins where id ='+id;会报错，因为查询的时候，id是有引号的。
        //原生的sql报错需要直接去sql图形化界面中测试sql语句是否正确，才可以写到代码中
        const articles = await ctx.app.model.query('select * from admins where id ="'+id+'"'  , {type:'SELECT'});
        ctx.body = {
            data: articles,
        };
        ctx.status = 200;
        ctx.username='data'
    }



}

module.exports = AdminController;
