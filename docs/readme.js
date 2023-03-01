/*
    * Mejoras en los comentarios con better comments
    ! hace mención a algo importante (fixme)
    nota: hace mención a una nota
    * hace mención a algo ya terminado (done)
    ? hace mención a alguna interrogante (tag)
    todo: hace mención que falta algo por hacer  ? 
    // hace mención a algo ya corregido
*/

// nota: ejemplo de swagger sin archivo yaml
/*
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
*/

// nota: ejemplo de swagger con archivo yaml
/*
const swaggerJsdoc = require('swagger-jsdoc');

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');

const app = express();

const swaggerSpec = swaggerJsdoc(swaggerDocument);

const swaggerDocs = (app, port) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec)
    });

    console.log(`Version 1 Docs are available at http://localhost:${port}/api-docs/`);
};

module.exports = { swaggerDocs };
*/