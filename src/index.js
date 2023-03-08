const app = require('./app');

const main=()=>{
    app.param.listen(app.param.get('port'), () => {
        console.log(`NODE_ENV = ${app.config.NODE_ENV}`);
        console.log(`Escuchando en puerto ${app.param.get('port')}...`);
        app.SwaggerDocs(app.param, app.param.get('port'), app.param.get('host'), app.config.VERSION);
    });
}

main();