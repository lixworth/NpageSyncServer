# Npage Sync Server

> Npage后端应用，用于同步账号内容

我还是懒得去写单元测试23333
## Install

```
npm install
npm run start # 生产环境
npm run dev # 开发环境
```

## Config
``` 
exports.version #版本号
exports.keys #cookit安全字符串
exports.mysql #mysq数据库配置 当前所使用的阿里DB
exports.jwt #JsonWebToken
exports.security #目前已关闭csrf
```

## API
> 需要登录操作的api需将Authorization加到Header 
>
> 尚未对token进行加密 安全系数极低

### ErrorCode
| Code | 原因 | 锅 |
| :-----| ----: | :----: |
| 100 | 未登录 | 用户/盒子 |
| 101 | 传入用户名不合法 | 用户/盒子 |
| 102 | 传入密码不合法 | 用户/盒子 |
| 103 | 传入密码不合法 | 用户/盒子 |
| 104 | 用户名已存在 | 用户/盒子 |
| 105 | 用户信息已过期 | 用户 |
| 200 | 未知 | 远坂时臣 |

### GET 基础状态 https://API_DOMAIN/
```json
{
    "success": true,
    "message": "许愿彼岸双生 出必还愿",
    "login": false,
    "version": "1.0.0"
}
```

### POST 登录 https://API_DOMAIN/login    |?name

```json
{
    "success": true,
    "data": {
        "name": "LixWorth2",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsIm5hbWUiOiJMaXhXb3J0aDIiLCJpYXQiOjE1NzIwNzQ3MTIsImV4cCI6MTU3MjI0NzUxMn0.dzMJsPqD26KxHUPPCURIVVZMMQUPTz0aPo83TWc5_Co",
        "time": "2d"
    }
}
```

### POST 注册 基础状态 https://API_DOMAIN/register    |?name&password
```json
{
    "success": true,
    "message": "注册成功"
}
```

### GET 用户信息 https://API_DOMAIN/me    | Token
```json
{
    "success": true,
    "data": {
        "id": 1,
        "name": "LixWorth"
    }
}

```
## 开源程序许可
* Egg: https://github.com/eggjs
* JWT: https://github.com/auth0/node-jsonwebtoken
* Hash: https://github.com/kelektiv/node.bcrypt.js
