const Controller = require('egg').Controller;
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class RegisterController extends Controller{
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
        if(user){
            return this.ctx.body = {
                success: false,
                error: 103,
                message: "用户名已存在",
            };
        }
        if(this.ctx.service.user.create(name,bcrypt.hashSync(password, 10))){
            return this.ctx.body = {
                success: true,
                message: "注册成功",
            };
        }
        return this.ctx.body = {
            success: false,
            error: 200,
            message: "Error",
        };
    }

}
module.exports = RegisterController;