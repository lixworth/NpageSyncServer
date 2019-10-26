const JWT = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

module.exports = (options, app) => {
    return async function userInterceptor(ctx, next) {
        //TODO: 加密token BETA 应该不会炸的吧
        var authToken = ctx.header.authorization; // 获取header里的authorization
        if(!authToken){
            return ctx.body = {
                success: false,
                error: 100,
                message: "未登录"
            };
        }
        var user = JWT.verify(authToken,fs.readFileSync(path.resolve(__dirname,'../jwt_pub.pem')));
        if(!user){
            return ctx.body = {
                success: false,
                error: 105,
                message: "用户信息已过期"
            };
        }
        await next();
    }
};

