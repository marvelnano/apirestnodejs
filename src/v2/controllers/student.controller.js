// nota: students son datos que podrían traerse de una db
const students = require('../database/db.json');

exports.getIndex = (req, res) => {
    res.send('<h2 style="text-align:center">Api Rest Estudiante</h2>');
};

exports.getStudents = (req, res) => {
    res.send(students);
};

exports.getStudentById = (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Estudiante no encontrado');
    else res.send(student);
};

exports.createStudent = (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll === 'true')
    };

    students.push(student);
    res.send(student);
};

exports.updateStudent = (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Estudiante no encontrado');

    // nota: actualiza elemento y muestra todos los elementos
    /*const updateStudent = students.map(p =>
        p.id === parseInt(req.params.id)
            ? {
                id: parseInt(req.params.id),
                name: req.body.name,
                age: parseInt(req.body.age),
                enroll: req.body.enroll
            }
            : p
    );
    res.send(updateStudent);*/

    //nota: actualiza elemento y muestra elemento modificado
    const index = students.indexOf(student);

    students[index].id = parseInt(req.params.id);
    students[index].name = req.body.name;
    students[index].age = parseInt(req.body.age);
    students[index].enroll = req.body.enroll;
    res.send(students[index]);
};

exports.deleteStudentById = (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Estudiante no encontrado');

    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);
};