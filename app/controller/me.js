const Controller = require('egg').Controller;
const JWT = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

class MeController extends Controller {
    async index() {
        //TODO: 怎么让中间层传回id啊
        const user = JWT.verify(this.ctx.header.authorization, fs.readFileSync(path.resolve(__dirname, '../jwt_pub.pem')));
        return this.ctx.body = {
            success: true,
            data: {
                id: user.id,
                name: user.name,
            }
        };
    }
}
module.exports = MeController;