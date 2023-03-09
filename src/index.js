const { app, config, SwaggerDocs } = require('./app');

const main=()=>{
    app.listen(app.get('port'), () => {
        console.log(`NODE_ENV = ${config.NODE_ENV}`);
        console.log(`Escuchando en puerto ${app.get('port')}...`);
        SwaggerDocs(app, app.get('port'), app.get('host'), config.VERSION);
    });
}

main();