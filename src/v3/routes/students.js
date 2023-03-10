const express = require("express");
const router = express();

const studentController = require("../controllers/student.controller");
const { authenticateUser } = require("../../middleware/authMiddleware");
const { errorSubRuta } = require('../../middleware/errorMiddleware');

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
  router.get("/", studentController.getIndex);
  router.post("/login", studentController.login);
  router.get("/listar", authenticateUser, studentController.getStudents);
  router.get("/:id", authenticateUser, studentController.getStudentById);
  router.post("/registrar", authenticateUser, studentController.createStudent);
  router.put("/:id", authenticateUser, studentController.updateStudent);
  router.delete("/:id", authenticateUser, studentController.deleteStudentById);
  // Ruta de comodín para manejar subrutas no definidas
  router.use('*', errorSubRuta, (req, res) => { });

  return router;
};
