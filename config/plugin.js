'use strict';
const path = require('path');

// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.info = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-info'),
};
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs'
};
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
};
exports.auth = {
  enable: false,
  path: path.join(__dirname, "../lib/plugin/egg-auth")
}
