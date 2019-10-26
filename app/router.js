// Router

module.exports = app =>{
    const { router,controller } = app;
    router.get('/',controller.index.index);
    router.post('/register',controller.register.index);
    router.post('/login',controller.login.index);

    const jwt = app.middleware.jwt();
    router.get('/me',jwt,controller.me.index)
    // router.post('/login',controller.login)

};