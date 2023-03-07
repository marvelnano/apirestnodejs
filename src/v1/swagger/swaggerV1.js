// * Documentación con SWAGGER
// https://www.npmjs.com/package/swagger-jsdoc
const swaggerJsdoc = require('swagger-jsdoc');

// https://www.npmjs.com/package/swagger-ui-express
const swaggerUi = require('swagger-ui-express');

// * Ejemplo SWAGGER https://editor.swagger.io/
// * Metadata info acerca de nuestra API
const options = {
    definition: {
      openapi: "3.0.3",
      info: {
        version: "1.0.0",
        title: "API REST Estudiantes",
        description: "API REST Estudiantes",
        contact: {
          name: "Marvel Developer",
        },
      },
      servers: [
        {
          url: "http://{host}:{port}/api/{basePath}",
          description: "NodeJS",
          variables: {
            host: {
              default: "localhost",
              description:
                "Development server, Staging server, Production server example.com",
              enum: ["localhost", "development", "staging", "api"],
            },
            port: {
              default: "3000",
              enum: ["3000", "3001"],
            },
            basePath: {
              default: "v1",
              enum: ["v1", "v2", "v3"],
            },
          },
        },
      ],
      tags: [
        {
          name: "Estudiantes", // name of a tag
          description: "Everything about your Students",
        },
      ],
      components: {
        responses: {
          BadRequest: {
            description:
              "(BadRequest) los datos enviados son incorrectos o hay datos obligatorios no enviados",
          },
          Unauthorized: {
            description:
              "(Unauthorized) no hay autorización para llamar el servicio",
          },
          NotFound: {
            description: "(NotFound) no se encontró la información",
          },
          ServerError: {
            description: "(ServerError) Error en el servidor",
          },
        },
        schemas: {
          // User model
          User: {
            type: "object", // data type
            properties: {
              id: {
                type: "integer", // data-type
                description: "id de usuario", // desc
                required: true,
                example: 1, // example of an id
              },
              name: {
                type: "string", // data-type
                description: "nombre de usuario", // desc
                example: "User", // example of a title
              },
            },
            required: ["id", "name"],
            example: {
              id: 1,
              name: "User",
            },
          },
          // Student model
          Student: {
            type: "object", // data type
            properties: {
              name: {
                type: "string", // data-type
                description: "Nombre del estudiante", // desc
                example: "Alexander", // example of a title
              },
              age: {
                type: "integer", // data type
                description: "Edad del estudiante", // desc
                example: 3, // example of a completed value
              },
              enroll: {
                type: "string", // data type
                description: "Estado del estudiante", // desc
                example: "true", // example of a completed value
              },
            },
            required: ["name", "age", "enroll"],
            example: {
              name: "Kalef",
              age: 10,
              enroll: "true",
            },
          },
          ExitoGenerarToken: {
            type: "object",
            properties: {
              codigoError: {
                type: "string",
                enum: ["000"],
                description: "Código de error al generar token",
              },
              descripcion: {
                type: "string",
                enum: ["Token generado"],
                description: "Descripción del servicio",
              },
              tipoToken: {
                type: "string",
                enum: ["Bearer"],
                description: "Tipo de token",
              },
              tokenAcceso: {
                type: "string",
                enum: ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."],
                description: "Token generado si usuario se loguea",
              },
              fechaCreacion: {
                type: "string",
                enum: ["6/3/2023, 09:26:00"],
                description: "Fecha de creación del token",
              },
              fechaExpiracion: {
                type: "string",
                enum: ["6/3/2023, 09:28:00"],
                description: "Fecha de expiración del token",
              },
              duracionToken: {
                type: "string",
                enum: ["2 min"],
                description: "Tiempo en minutos que dura el token",
              },
            },
          },
          ExitoListarEstudiantes: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                enum: [1],
                description: "el id del estudiante",
              },
              name: {
                type: "string",
                enum: ["gael"],
                description: "nombre del estudiante",
              },
              age: {
                type: "integer",
                enum: [3],
                description: "edad del estudiante",
              },
              enroll: {
                type: "string",
                enum: ["true"],
                description: "estado del estudiante",
              },
            },
          },
          ExitoRegistrarEstudiantes: {
            type: "object",
            properties: {
              respuesta: {
                type: "integer",
                enum: [1],
                description:
                  "Bandera que nos indica si llamada al servicio fue exitosa",
              },
              id: {
                type: "integer",
                enum: [1],
                description: "el id del estudiante",
              },
              name: {
                type: "string",
                enum: ["gael"],
                description: "nombre del estudiante",
              },
              age: {
                type: "integer",
                enum: [3],
                description: "edad del estudiante",
              },
              enroll: {
                type: "string,",
                enum: ["true"],
                description: "estado del estudiante",
              },
            },
          },
        },
        securitySchemes: {
          api_key: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
          },
        },
      },
    },
    apis: ["src/v1/routes/students.js"],
  };

// * Ruta donde se va a inicializar SWAGGER
// * Docs en JSON format
const swaggerSpec = swaggerJsdoc(options);

// * Function to setup our docs
const swaggerDocs = (app, port, host, version) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec)
    });

    console.log(`Version ${version} Docs are available at http://${host}:${port}/api-docs/`);
};

module.exports = { swaggerDocs };