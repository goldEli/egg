/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607330542526_2988';

  // add your middleware config here
  config.middleware = ['httpLog'];

  config.httpLog = {
    type: 'all',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.auth = {
    exclude: ['/home', '/user', '/login', '/logout'],
  };

  config.mysql = {
    app: true, // 挂载到app
    agent: false,
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'egg',
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'egg',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
    root: path.join(appInfo.baseDir, 'app/html'),
  };

  config.ejs = {
    delimiter: '%',
  };

  config.static = {
    prefix: '/assets/',
    dir: path.join(appInfo.baseDir, 'app/assets'),
  };

  config.session = {
    key: 'SESS',
    httpOnly: true,
    maxAge: 1000 * 5,
    renew: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
