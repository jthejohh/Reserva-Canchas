/*
 * 📂 RUTA: middlewares/verifyToken.js
 * 📝 DESCRIPCIÓN: Verifica la validez del token JWT enviado en la cabecera
 * de la petición. Si es válido, adjunta la información del usuario (payload)
 * al objeto `req` para que las siguientes funciones puedan usarla.
 */
const jwt = require('jsonwebtoken');
const { createError } = require('../utils/errorHandler');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // El formato del header es "Bearer TOKEN"
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return next(createError(401, 'No se proporcionó un token. Acceso denegado.'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next(createError(403, 'Token inválido o expirado.'));
        }
        // Adjuntamos el payload del token al objeto request
        req.user = user;
        next(); // El token es válido, continuamos a la siguiente función
    });
};

module.exports = verifyToken;
