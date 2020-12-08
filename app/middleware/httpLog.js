const dayjs = require('dayjs');
module.exports = options => async (ctx, next) => {
  const sTime = Date.now();
  const startTime = dayjs(sTime).format('YYYY-MM-DD HH:mm:ss');
  const req = ctx.request;
  await next();
  const log = {
    method: req.method,
    url: req.url,
    data: req.body,
    startTime,
    endTime: dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
    timeLength: Date.now() - sTime,
  };
  console.log(log);
};
