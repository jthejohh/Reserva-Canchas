/*
 * 📂 RUTA: middlewares/validateRequest.js
 * 📝 DESCRIPCIÓN: Middleware para manejar los resultados de las validaciones
 * hechas con express-validator.
 */
const { validationResult } = require('express-validator');
const { createError } = require('../utils/errorHandler');

const validate = (req, res, next) => {
    // validationResult(req) extrae los errores de validación de la petición
    const errors = validationResult(req);

    // Si no hay errores, continuamos a la siguiente función (el controlador)
    if (errors.isEmpty()) {
        return next();
    }

    // Si hay errores, los extraemos y formateamos
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }));

    // Lanzamos un error 422 (Unprocessable Entity) con la lista de errores
    return next(createError(422, 'Error de validación', { errors: extractedErrors }));
};

module.exports = {
    validate,
};
