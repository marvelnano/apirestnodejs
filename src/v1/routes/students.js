const express = require('express');
const router = express();

const studentController = require('../controllers/student.controller');

/**
 * @swagger
 *  /api/students/listar:
 *      get:
 *          summary: list all students
 *          tags: 
 *              - estudiantes
 *          responses:
 *              200:
 *                  description: Listados Correctamente
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