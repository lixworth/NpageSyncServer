const Service = require('egg').Service;


class UserService extends Service {
    async find(uid) {
        const user = await this.app.mysql.get('users', { id: uid });
        return { user };
    }
    async findByName(name) {
        const user = await this.app.mysql.get('users', { name: name });
        return user;
    }
    async create(username,password){
        // 插入
        const result = await this.app.mysql.insert('users', { name: username,password: password });
        console.log(result);
        return result.affectedRows === 1;
    }

}

module.exports = UserService;