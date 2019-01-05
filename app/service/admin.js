'use strict';

const Service = require('egg').Service;
const uniqid = require('uniqid');

class AdminService extends Service {
    /**
     * 插入一条数据
     * @param {Object} model - 文章主体
     */
    async insertOne(model) {
        const { ctx } = this;

        await ctx.model.Admin.create({
            id: uniqid(),
            email: model.email,
            password: model.password,
            created_at: new Date().toLocaleString(),
            updated_at: new Date().toLocaleString(),
        });
    }

    /**
     * 查询全部
     * @param {Number} page - 页数
     * @param {Number} size - 大小
     * @return {Object} result - 查询结果
     */
    async findAll(page, size) {
        const { ctx } = this;
        let result = {};

        if (page && size) {
            result = await ctx.model.Admin.findAndCountAll({
                attributes: {
                    exclude: [ 'content' ],
                },
                order: [
                    [ 'updated_at', 'DESC' ],
                ],
                offset: (page - 1) * size,
                limit: size,
            });
        } else {
            result = await ctx.model.Admin.findAndCountAll({
                attributes: {
                    exclude: [ 'content' ],
                },
                order: [
                    [ 'updated_at', 'DESC' ],
                ],
            });
        }

        return result;
    }

    /**
     * 通过 id 查询
     * @param {String} id - 文章 Id
     * @return {Object} result - 查询结果
     */
    async findById(id) {
        const { ctx } = this;

        const result = await ctx.model.Admin.findOne({
            where: {
                id,
            },
        });

        return result;
    }

    /**
     * 通过 id 删除
     * @param {String} id - 文章 Id
     */
    async deleteOne(id) {
        const { ctx } = this;

        await ctx.model.Admin.destroy({
            where: {
                id,
            },
        });
    }

}

module.exports = AdminService;
