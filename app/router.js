// Router

module.exports = app => {
    const {router, controller} = app;
    const jwt = app.middleware.jwt();

    router.get('/', controller.index.index);
    router.post('/register', controller.register.index);
    router.post('/login', controller.login.index);

    router.get('/me', jwt, controller.me.index)

};