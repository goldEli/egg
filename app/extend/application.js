const path = require('path');
module.exports = {
  package(key) {
    const pack = getPackage();
    return key ? pack[key] : pack;
  },
  get allPackage() {
    return getPackage();
  },
};

function getPackage() {
  const filePath = path.join(process.cwd(), 'package.json');
  const pack = require(filePath);
  return pack;
}
