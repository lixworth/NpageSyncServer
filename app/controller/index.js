const Controller = require('egg').Controller;

class IndexController extends Controller{
    async index(){
        this.ctx.body = {
            success: true,
            login: false,
            version: this.config.version,
        };
    }
}
module.exports = IndexController;



