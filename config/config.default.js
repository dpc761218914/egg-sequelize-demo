'use strict';


/**
 * 默认配置
 * @param  {Egg.Application} app - Egg.js 应用
 * @return {Object} confug - 默认配置项
 */
module.exports = app => {
  const config = exports = {};



  // view
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // static
  exports.static = {
    maxAge: 43200,
  };

  // security
  config.security = {
    methodnoallow: {
      enable: false,
    },
    csrf: {
      enable: false,
    },
  };

  // sequelize
  config.sequelize = {
    dialect: 'mysql',
    database: 'nodesql',
    host: '127.0.0.1',
    port: '3306',
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    username: "root",
    password: "root",
  };



  // 错误处理
  config.onerror = {
    errorPageUrl: () => '/error',
  };

  return config;
};
