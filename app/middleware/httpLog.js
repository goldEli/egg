const dayjs = require('dayjs');
const fs = require('fs')

module.exports = options => async (ctx, next) => {
  console.log("httpLog options:",options)
  const sTime = Date.now();
  const startTime = dayjs(sTime).format('YYYY-MM-DD HH:mm:ss');
  const req = ctx.request;
  await next();
  const endTime = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss')
  const log = {
    method: req.method,
    url: req.url,
    data: req.body,
    startTime,
    endTime,
    timeLength: Date.now() - sTime,
  };
  const content = `${endTime} [httpLog] ${JSON.stringify(log)} \r\n`

  fs.appendFileSync(ctx.app.baseDir+"/httpLog.log", content)
  console.log(log);

};
