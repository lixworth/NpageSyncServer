//Config
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


exports.jwt = { //test
    secret: 'egg-api-jwt',
};

exports.security = {
    csrf: {
        enable: false,
    },
};