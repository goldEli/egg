module.exports = {
  getParams(key) {
    const {method} = this.request
    if (method === "GET") {
      return key ? this.query[key] : this.query
    } else {
      return key ? this.params[key] : this.params
    }
  }
};