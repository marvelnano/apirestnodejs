// * Documentación con SWAGGER
// https://www.npmjs.com/package/swagger-jsdoc
const swaggerJsdoc = require('swagger-jsdoc');

// https://www.npmjs.com/package/swagger-ui-express
const swaggerUi = require('swagger-ui-express');

// * Ejemplo SWAGGER https://editor.swagger.io/
// * Metadata info acerca de nuestra API
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: 'API REST Estudiantes',
            description: 'API REST Estudiantes',
            contact: {
                name: 'Marvel Developer'
            },            
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ['./routes/*.js']
};

// * Ruta donde se va a inicializar SWAGGER
// * Docs en JSON format
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// * Function to setup our docs
// ? app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const swaggerDocs = (app, port) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec)
    });

    console.log(`Version 1 Docs are available at http://localhost:${port}/api-docs/`);
};

module.exports = { swaggerDocs };