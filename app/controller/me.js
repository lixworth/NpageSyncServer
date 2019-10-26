const Controller = require('egg').Controller;

class MeController extends Controller{
    async index(){
        return this.ctx.body = "23fuck";
    }
}
module.exports = MeController;