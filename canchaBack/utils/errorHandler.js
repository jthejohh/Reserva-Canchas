/*
 * 📂 RUTA: utils/errorHandler.js
 * 📝 DESCRIPCIÓN: Una función de ayuda para crear objetos de error personalizados
 * con un código de estado, lo que facilita el manejo de errores.
 */
const createError = (status, message) => {
    const error = new Error(message);
    error.statusCode = status;
    return error;
};

module.exports = { createError };
