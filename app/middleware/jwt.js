const JWT = require('jsonwebtoken');

module.exports = (options, app) => {
    return async function userInterceptor(ctx, next) {
        //TODO: 加密token
        var authToken = ctx.header.authorization; // 获取header里的authorization
        if(!authToken){
            return ctx.body = {
                success: false,
                error: 100,
                message: "未登录"
            };
        }
        console.log(JWT.decode(authToken));
        await next();
    }
};

