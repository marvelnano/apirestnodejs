const express = require('express');
const router = express();

const studentController = require('../controllers/student.controller');

module.exports = () => {
    router.get('/',studentController.getIndex);
    router.get('/listar',studentController.getStudents);
    router.get('/:id',studentController.getStudentById);
    router.post('/registrar',studentController.createStudent);
    router.put('/:id',studentController.updateStudent);
    router.delete('/:id',studentController.deleteStudentById);

    return router;
}