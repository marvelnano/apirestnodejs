const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const routeStudents = require(`./${config.VERSION}/routes/students`);
const { swaggerDocs: SwaggerDocs } = require(`./${config.VERSION}/swagger/swaggerV2`);

// * Servidor
const app = express();

// * Settings
app.set('port', config.PORT);
app.set('host', config.HOST);
app.set('json spaces', 2);

// * Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//var whitelist = ['https://editor.swagger.io/', 'http://example2.com']
app.use(cors());

// * Rutas del app
app.get('/', (req, res) => {
    res.send('<h2 style="text-align:center">Bienvenido al Api Rest con Node JS</h2>');
});

console.log(`NODE_ENV = ${config.NODE_ENV}`);
app.use(`/api/${config.VERSION}/students`, routeStudents());

module.exports = {
    param: app,
    config: config,
    SwaggerDocs: SwaggerDocs
}