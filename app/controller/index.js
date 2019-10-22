const Controller = require('egg').Controller;

class IndexController extends Controller{
    async index(){
        this.ctx.body = 'Hello World';
    }
}
module.exports = IndexController;
