module.exports = options => async(ctx, next) => {
  const url = ctx.request.url.split("?")[0]
  const user = ctx.session.user
  // console.log('url:', url, user)
  if (!user && !options.exclude.includes(url)) {
    ctx.body = {
      status: 1001,
      errMsg: "please login"
    }
  } else {
    await next()
  }
}