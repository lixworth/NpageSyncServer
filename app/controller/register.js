const Controller = require('egg').Controller;
const JWT = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class RegisterController extends Controller{
    async index(){
        const name = this.ctx.request.body.name;
        if (typeof (name) == "undefined" || name==='') {
            return this.ctx.body = {
                success: false,
                error: 101,
                message: "用户名不合法",
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
            message: "Error",
        };
    }

}
module.exports = RegisterController;