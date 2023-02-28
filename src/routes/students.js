const express = require('express');
const router = express();

const studentController = require('../controllers/student.controller');

module.exports = () => {    
    router.get('/', studentController.getIndex);

    /**
     * @swagger
     * components:
     *  schemas:
     *      Student:
     *          type: object
     *          properties:
     *              id:
     *                  type: integer
     *                  description: el id del estudiante
     *              name:
     *                  type: string
     *                  description: nombre del estudiante
     *              age: 
     *                  type: integer
     *                  description: edad del estudiante
     *              enroll:
     *                  type: string
     *                  description: estado del estudiante
     *          required:
     *              - id
     *              - name
     *              - age
     *              - enroll
     *          example:
     *              id: 1
     *              name: Kalef
     *              age: 10
     *              enroll: true
     */

    /**
     *  @swagger
     *  /api/students/listar:
     *      get:
     *          sumary: list all students
     *          tags: [Student]
     *          responses:
     *              200:
     *                  description: Listados Correctamente
     */
    router.get('/listar', studentController.getStudents);
    router.get('/:id', studentController.getStudentById);
    router.post('/registrar', studentController.createStudent);
    router.put('/:id', studentController.updateStudent);
    router.delete('/:id', studentController.deleteStudentById);

    return router;
}