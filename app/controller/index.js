const Controller = require('egg').Controller;

class IndexController extends Controller{
    async index(){
        this.ctx.body = {
            success: true,
            message:"许愿彼岸双生 出必还愿",
            version: this.config.version,
        };
    }
}
module.exports = IndexController;



