const jwt = require("jsonwebtoken");
const config = require("../../config");

// nota: students son datos que podrían traerse de una db
const students = [
  { id: 1, name: "Jorge", age: 20, enroll: true },
  { id: 2, name: "Mariana", age: 38, enroll: false },
  { id: 3, name: "Antonio", age: 25, enroll: false },
];

// nota: usuario es la tabla que se usara para el login
const usuario = { id: 1, name: "jose" };

exports.getIndex = (req, res) => {
  res.send('<h2 style="text-align:center">Api Rest Estudiante</h2>');
};

exports.login = (req, res) => {
  const body = req.body;
  const { id: sub, name } = usuario;

  if (body.id != usuario["id"] || body.name != usuario["name"]) {
    res.status(401);
    return res.json({
      codigoError: "401",
      descripcion: "Datos de usuario son inválidos",
    });
  }

  const token = jwt.sign(
    {
      sub,
      name,
      exp: Date.now() + 120 * 1000,
    },
    config.SECRET
  );

  const fechaInicio = new Date();
  const fechaFin = new Date(Date.now() + config.TIME_EXEC_TOKEN * 1000);

  const resultLogin = {
    codigoError: "000",
    descripcion: "Token generado",
    tipoToken: "Bearer",
    tokenAcceso: token,
    fechaCreacion: fechaInicio.toLocaleString(),
    fechaExpiracion: fechaFin.toLocaleString(),
    duracionToken: config.TIME_EXEC_TOKEN / 60 + " min",
  };
  res.send(resultLogin);
};

exports.getStudents = (req, res) => {
  try {
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    if (!req.headers.authorization) {
      return res.status(400).send({ error: "token no ingresado" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, config.SECRET);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expired" });
    }

    // * proceso para listar todos los estudiantes
    res.send(students);
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

exports.getStudentById = (req, res) => {
  try {
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    if (!req.headers.authorization) {
      return res.status(400).send({ error: "token no ingresado" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, config.SECRET);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expired" });
    }

    // * proceso de buscar estudiante por id
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Estudiante no encontrado");
    else res.send(student);
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

exports.createStudent = (req, res) => {
  try {
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    if (!req.headers.authorization) {
      return res.status(400).send({ error: "token no ingresado" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, config.SECRET);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expired" });
    }

    // * proceso para crear estudiante
    const ids = students.map((student) => student.id);
    const maxId = Math.max(...ids);

    const student = {
      id: maxId + 1,
      name: req.body.name,
      age: parseInt(req.body.age),
      enroll: req.body.enroll === "true",
    };

    students.push(student);
    res.send(student);
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

exports.updateStudent = (req, res) => {
  try {
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    if (!req.headers.authorization) {
      return res.status(400).send({ error: "token no ingresado" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, config.SECRET);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expired" });
    }

    // * proceso de actualizar estudiante
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Estudiante no encontrado");

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
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};

exports.deleteStudentById = (req, res) => {
  try {
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    if (!req.headers.authorization) {
      return res.status(400).send({ error: "token no ingresado" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, config.SECRET);

    if (Date.now() > payload.exp) {
      return res.status(401).send({ error: "token expired" });
    }

    // * proceso de eliminar estudiante
    const student = students.find((c) => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send("Estudiante no encontrado");

    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};
