/*
 * 📂 RUTA: validators/canchas.validator.js
 * 📝 DESCRIPCIÓN: Reglas de validación para los endpoints de canchas.
 */
const { body } = require('express-validator');

// Usamos los nombres del schema.prisma para los enums
const ESTADOS_VALIDOS = ['Disponible', 'En_Mantenimiento', 'No_Disponible'];

const canchaValidator = [
    body('id_categoria')
        .notEmpty().withMessage('El ID de la categoría es obligatorio.')
        .isInt({ min: 1 }).withMessage('El ID de la categoría debe ser un número entero positivo.'),

    body('nombre')
        .notEmpty().withMessage('El nombre de la cancha es obligatorio.')
        .isString().withMessage('El nombre debe ser una cadena de texto.')
        .trim(),

    body('descripcion')
        .optional()
        .isString().withMessage('La descripción debe ser una cadena de texto.')
        .trim(),

    body('tarifa_por_hora')
        .notEmpty().withMessage('La tarifa por hora es obligatoria.')
        .isDecimal({ decimal_digits: '1,2' }).withMessage('La tarifa debe ser un número decimal válido (ej: 50.00).'),

    body('estado')
        .optional()
        .isIn(ESTADOS_VALIDOS).withMessage(`El estado debe ser uno de los siguientes: ${ESTADOS_VALIDOS.join(', ')}`)
];

module.exports = {
    canchaValidator,
};
