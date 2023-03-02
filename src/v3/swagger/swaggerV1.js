// * Documentación con SWAGGER
// https://www.npmjs.com/package/swagger-jsdoc
const swaggerJsdoc = require('swagger-jsdoc');

// https://www.npmjs.com/package/swagger-ui-express
const swaggerUi = require('swagger-ui-express');

// * Ejemplo SWAGGER https://editor.swagger.io/
// * Metadata info acerca de nuestra API
const options = {
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
        ],
        tags: [
            {
              name: "Estudiantes", // name of a tag
              description: "Everything about your Students"
            }
        ],
        components: {
            responses: {
                BadRequest: {
                  description: "(BadRequest) los datos enviados son incorrectos o hay datos obligatorios no enviados"
                },
                Unauthorized: {
                  description: "(Unauthorized) no hay autorización para llamar el servicio"
                },
                NotFound: {
                  description: "(NotFound) no se encontró la información"
                },
                ServerError:{
                  description: "(ServerError) Error en el servidor"
                }
            },
            schemas: {
                // Student model
                Student: {
                  type: "object", // data type
                  properties: {
                    id: {
                      type: "integer", // data-type
                      description: "El id del estudiante", // desc
                      required: true,
                      example: 1, // example of an id
                    },
                    name: {
                      type: "string", // data-type
                      description: "Nombre del estudiante", // desc
                      example: "Alexander", // example of a title
                    },
                    age: {
                      type: "string", // data type
                      description: "Edad del estudiante", // desc
                      example: 3, // example of a completed value
                    },
                    enroll: {
                      type: "string", // data type
                      description: "estado del estudiante", // desc
                      example: "true", // example of a completed value
                    }
                  },
                  required:"id",
                  example: {
                    id: 1,
                    name: "Kalef",
                    age: 10,
                    enroll: "true"
                  }
                },
                ExitoListarEstudiantes: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            enum: [1],
                            description: "el id del estudiante"
                        },
                        name: {
                            type: "string",
                            enum: ['gael'],
                            description: "nombre del estudiante"
                        },
                        age: {
                            type: "integer",
                            enum: [3],
                            description: "edad del estudiante"
                        },
                        enroll: {
                            type: "string",
                            enum: ['true'],
                            description: "estado del estudiante"
                        }
                    }
                },
                ExitoRegistrarEstudiantes: {
                    type: "object",
                    properties: {
                        respuesta: {
                            type: "integer",
                            enum: [1],
                            description: "Bandera que nos indica si llamada al servicio fue exitosa"
                        },
                        id: {
                            type: "integer",
                            enum: [1],
                            description: "el id del estudiante"
                        },
                        name: {
                            type: "string",
                            enum: ['gael'],
                            description: "nombre del estudiante"
                        },
                        age: {
                            type: "integer",
                            enum: [3],
                            description: "edad del estudiante"
                        },
                        enroll: {
                            type: "string,",
                            enum: ['true'],
                            description: "estado del estudiante"
                        }
                    }
                }
            }
        }
    },
    apis: ["../routes/*.js"],
};

// * Ruta donde se va a inicializar SWAGGER
// * Docs en JSON format
const swaggerSpec = swaggerJsdoc(options);

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