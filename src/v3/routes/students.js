const express = require('express');
const router = express();

const studentController = require('../controllers/student.controller');

/**
 * @openapi
 * /students/login:
 *      post:
 *          tags: 
 *              - Estudiantes
 *          summary: "Genera un nuevo token si se loguea correctamente"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *              required: true
 *          responses:
 *              '200':
 *                  description: Token Generado Correctamente.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ExitoGenerarToken'
 *              '400':
 *                  $ref: '#/components/responses/BadRequest'
 *              '401':
 *                  $ref: '#/components/responses/Unauthorized'
 *              '404':
 *                  $ref: '#/components/responses/NotFound'
 *              '500':
 *                  $ref: '#/components/responses/ServerError'
 */
/**
 * @openapi
 *  /students/listar:
 *      get:
 *          tags: 
 *              - Estudiantes
 *          summary: "Lista todos los estudiantes"
 *          responses:
 *              '200':
 *                  description: Listado Correctamente.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/ExitoListarEstudiantes'
 *              '400':
 *                  $ref: '#/components/responses/BadRequest'
 *              '401':
 *                  $ref: '#/components/responses/Unauthorized'
 *              '404':
 *                  $ref: '#/components/responses/NotFound'
 *              '500':
 *                  $ref: '#/components/responses/ServerError'
 *          security:
 *              - api_key: []
 */
module.exports = () => {
    router.get('/', studentController.getIndex);   
    router.post('/login', studentController.login);  
    router.get('/listar', studentController.getStudents);
    router.get('/:id', studentController.getStudentById);
    router.post('/registrar', studentController.createStudent);
    router.put('/:id', studentController.updateStudent);
    router.delete('/:id', studentController.deleteStudentById);

    return router;
}