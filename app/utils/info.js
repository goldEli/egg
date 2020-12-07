const os = require("os")

module.exports = () => {
  const data = {
    memory: os.totalmem() / 1024 / 1024 / 1024 + "G",
    platform: os.platform(),
    cups: os.cpus().length 
  }
  return data
}