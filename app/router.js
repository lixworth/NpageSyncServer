// Router

module.exports = app =>{
    const { router,controller } = app;
    router.get('/',controller.login.index);
    router.post('/register',controller.register.index);
    router.post('/login',controller.login.index);

    // router.post('/login',controller.login)

};