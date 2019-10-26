const Controller = require('egg').Controller;
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class LoginController extends Controller{
    async index(){
        const name = this.ctx.request.body.name;
        const password = this.ctx.request.body.password;
        if (typeof (name) == "undefined" || name==='') {
            return this.ctx.body = {
                success: false,
                error: 101,
                message: "用户名不合法",
            };
        }
        if (typeof (password) == "undefined" || password==='') {
            return this.ctx.body = {
                success: false,
                error: 102,
                message: "密码不合法",
            };
        }
        const user = await this.ctx.service.user.findByName(name);
        if(!user){
            return this.ctx.body = {
                success: false,
                error: 104,
                message: "用户不存在",
            };
        }
        if(! bcrypt.compareSync(password, user.password)){
            return this.ctx.body = {
                success: false,
                error: 105,
                message: "密码错误",
            };
        }

        const userToken = JWT.sign({
            id: user.id,
            name: user.name
        },this.config.jwt.secret,{
            expiresIn: '2d',
        });

        return this.ctx.body = {
            success: true,
            data: {
                "name": user.name,
                "token": userToken,
                "time": "2d"
            },
        };
    }
}
module.exports = LoginController;