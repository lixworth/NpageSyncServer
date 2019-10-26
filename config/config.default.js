//Config
const fs = require('fs');
const path = require('path');

exports.version = '1.0.0';

exports.keys = "Captain on the bridge";


exports.mysql = {
    client: {
        host: 'mysql.mcpe.ink',
        port: '3306',
        user: 'npage',
        password: 'NpageSyncServer@123',
        database: 'npage',
    },
    app: true,
    agent: false,
};

let cert = fs.readFileSync(path.resolve(__dirname,'../app/jwt.pem'));

exports.jwt = { //test
    secret: cert,
};

exports.security = {
    csrf: {
        enable: false,
    },
};