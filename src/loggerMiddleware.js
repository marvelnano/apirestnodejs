const logger = (req, res, next) => {
    console.log('------');
    console.log(req.method);
    console.log(req.path);
    console.log(req.body);
    console.log('------');
    next()
};

const logger404 = (req, res, next) => {
    console.log(`error 404: No se encontró la ruta ${req.url}`);
    res.status(404).json({
        error: 'Lo siento, no se pudo encontrar la ruta solicitada.'
    });
};

module.exports = {
    logger: logger,
    logger404: logger404
}