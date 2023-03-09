const { app, config } = require('./app');

const main=()=>{
    app.listen(app.get('port'), () => {
        console.log(`NODE_ENV = ${config.NODE_ENV}`);
        console.log(`Escuchando en puerto ${app.get('port')}...`);        
    });
}

main();