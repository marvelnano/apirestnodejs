const jwt = require("jsonwebtoken");
const config = require("../../config");
const pool = require("../config/conexion");

exports.getIndex = (req, res) => {
  res.send('<h2 style="text-align:center">Api Rest con DB MySQL</h2>');
};

exports.login = (req, res) => {
  const body = req.body;
  const usuario = { id: body.id, name: body.name };

  const sql = "SELECT * FROM usuario WHERE id=? AND name=?;";
  pool.query(sql, [body.id, body.name], (err, result, fields) => {
    if (err) {
      res.status(500);
      return res.json({ message: "Error en la consulta" });
    }

    if (result.length <= 0) {
      res.status(401);
      return res.json({
        codigoError: "401",
        descripcion: "Datos de usuario son inválidos",
      });
    }

    // * proceso para generar token si usuario se loguea correctamente
    const { id: sub, name } = usuario;
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
  });
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
    const sql = "SELECT * FROM estudiante;";
    pool.query(sql, (err, result, fields) => {
      if (err) {
        res.status(500);
        res.json({ message: "Error en la consulta" });
      }
      res.json(result);
    });
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
    const ID = req.params.id;

    const sql = "SELECT * FROM estudiante WHERE id=?";
    pool.query(sql, [ID], (err, result, fields) => {
      if (err) {
        res.status(500);
        res.json({ message: "Error en la consulta" });
      }
      res.json(result);
    });
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
    const values = Object.values(req.body);

    const sql = "INSERT INTO estudiante(name, age, enroll) VALUES(?, ?, ?)";
    pool.query(sql, values, (err, result, fields) => {
      if (err) {
        res.status(500);
        res.json({ message: "Error al guardar en BD" });
      }
      res.json({ message: "Nuevo estudiante agregado" });
    });
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
    const values = Object.values(req.body);
    const ID = req.params.id;

    const sql = "UPDATE estudiante SET name=?, age=?, enroll=? WHERE id=?";
    pool.query(sql, [...values, ID], (err, result, fields) => {
      if (err) {
        res.status(500);
        res.json({ message: "Error al actualizar" });
      }
      res.json({ message: "Estudiante actualizado" });
    });
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
    const ID = req.params.id;

    const sql = "DELETE FROM estudiante WHERE id=?";
    pool.query(sql, ID, (err, result, fields) => {
      if (err) {
        res.status(500);
        res.json({ message: "Error al eliminar" });
      }
      res.json({ message: "Un estudiante eliminado" });
    });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};
