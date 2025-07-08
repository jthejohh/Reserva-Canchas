/*
 * 📂 RUTA: validators/reservas.validator.js
 * 📝 DESCRIPCIÓN: Reglas de validación para los endpoints de reservas.
 */
const { body } = require('express-validator');

const crearReservaValidator = [
    body('id_cancha')
        .notEmpty().withMessage('El ID de la cancha es obligatorio.')
        .isInt({ min: 1 }).withMessage('El ID de la cancha debe ser un número entero positivo.'),

    body('fecha_hora_inicio')
        .notEmpty().withMessage('La fecha y hora de inicio son obligatorias.')
        .isISO8601().withMessage('La fecha de inicio debe estar en formato ISO8601 (YYYY-MM-DDTHH:MM:SSZ).'),

    body('fecha_hora_fin')
        .notEmpty().withMessage('La fecha y hora de fin son obligatorias.')
        .isISO8601().withMessage('La fecha de fin debe estar en formato ISO8601 (YYYY-MM-DDTHH:MM:SSZ).'),
];

module.exports = {
    crearReservaValidator,
};
