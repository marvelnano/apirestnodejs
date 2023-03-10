const jwt = require('jsonwebtoken');
const config = require('../config');

const authenticateUser = (req, res, next) => {
    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(400).send({ error: "Falta el encabezado Authorization" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = jwt.verify(token, config.SECRET);
        req.name = payload.name;
        if (Date.now() > payload.exp) {
            return res.status(401).send({ error: "expired token" });
        }
        next();
    } catch (err) {
        throw res.status(401).send({ error: "Invalid token" });
    }
}

module.exports = {
    authenticateUser: authenticateUser
};
