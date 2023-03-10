// * Documentación con SWAGGER
// https://www.npmjs.com/package/swagger-jsdoc
const swaggerJsdoc = require('swagger-jsdoc');

// https://www.npmjs.com/package/swagger-ui-express
const swaggerUi = require('swagger-ui-express');

// * Ejemplo SWAGGER https://editor.swagger.io/
// * Metadata info acerca de nuestra API
//const YAML = require('yamljs');
//const swaggerDocument = YAML.load('./openapi.yaml');
const swaggerDocument = require('./openapi.json');

// * Function to setup our docs
const swaggerDocs = (app, port, host, version) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec)
    });

    /*app.use(function(req, res, next) {
        // Verificar si la ruta solicitada existe en la especificación de Swagger
        console.log('path: '+req.url);
        if (swaggerDocument.paths[req.url] !== '/api-docs') {
          // Si la ruta no existe en Swagger, enviar una respuesta con código de estado 404
          res.status(404).send('No se pudo encontrar la página solicitada.');
        } else {
          // Si la ruta existe en Swagger, continuar con la siguiente función middleware
          next();
        }
    }); */

    console.log(`Version ${version} Docs are available at http://${host}:${port}/api-docs/`);
};

module.exports = { swaggerDocs };