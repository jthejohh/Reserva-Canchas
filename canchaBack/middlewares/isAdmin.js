/*
 * 📂 RUTA: middlewares/isAdmin.js
 * 📝 DESCRIPCIÓN: Verifica si el usuario autenticado (cuya información fue
 * adjuntada por verifyToken) tiene el rol de 'Administrador'.
 */
const { createError } = require('../utils/errorHandler');

// ¡Importante! Este middleware DEBE ejecutarse después de verifyToken.
const isAdmin = (req, res, next) => {
    // req.user fue adjuntado por el middleware verifyToken
    if (req.user && req.user.rol === 'Administrador') {
        next(); // El usuario es Admin, puede continuar.
    } else {
        return next(createError(403, 'Acceso denegado. Se requiere rol de Administrador.'));
    }
};

module.exports = isAdmin;
