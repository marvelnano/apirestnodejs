const pool = require("../config/conexion");

exports.getIndex = (req, res) => {
  res.send('<h2 style="text-align:center">Api Rest con DB MySQL</h2>');
};

exports.getStudents = (req, res) => {
  const sql = "SELECT * FROM students;";
  pool.query(sql, (err, result, fields) => {
    if (err) {
      res.status(500);
      res.json({ message: "Error en la consulta" });
    }
    res.json(result);
  });
};

exports.getStudentById = (req, res) => {
  const ID = req.params.id;

  const sql = "SELECT * FROM students WHERE id=?";
  pool.query(sql, [ID], (err, result, fields) => {
    if (err) {
      res.status(500);
      res.json({ message: "Error en la consulta" });
    }
    res.json(result);
  });
};

exports.createStudent = (req, res) => {
  const values = Object.values(req.body);

  const sql = "INSERT INTO students(name, age, enroll) VALUES(?, ?, ?)";
  pool.query(sql, values, (err, result, fields) => {
    if (err) {
      res.status(500);
      res.json({ message: "Error al guardar en BD" });
    }
    res.json({ message: "Nuevo estudiante agregado" });
  });
};

exports.updateStudent = (req, res) => {
  const values = Object.values(req.body);
  const ID = req.params.id;

  const sql = "UPDATE students SET name=?, age=?, enroll=? WHERE id=?";
  pool.query(sql, [...values, ID], (err, result, fields) => {
    if (err) {
      res.status(500);
      res.json({ message: "Error al actualizar" });
    }
    res.json({ message: "Estudiante actualizado" });
  });
};

exports.deleteStudentById = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM students WHERE id=?";
  pool.query(sql, ID, (err, result, fields) => {
    if (err) {
      res.status(500);
      res.json({ message: "Error al eliminar" });
    }
    res.json({ message: "Un estudiante eliminado" });
  });
};
