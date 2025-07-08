/*
 * 📂 RUTA: middlewares/errorHandler.js
 * 📝 DESCRIPCIÓN: Un middleware global para capturar todos los errores.
 * Asegura que las respuestas de error sean consistentes en toda la API.
 */
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Es bueno loguear el error para depuración

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Ocurrió un error interno en el servidor.';

    res.status(statusCode).json({
        error: {
            message: message,
            status: statusCode,
        },
    });
};

module.exports = errorHandler;
