/*
 * 📂 RUTA: validators/pagos.validator.js
 * 📝 DESCRIPCIÓN: Reglas de validación para el endpoint de pagos.
 */
const { body } = require('express-validator');

// Usamos los nombres del schema.prisma para los enums
const METODOS_PAGO_VALIDOS = ['Tarjeta_de_Cr_dito', 'PSE', 'Efectivo'];

const pagoValidator = [
    body('id_reserva')
        .notEmpty().withMessage('El ID de la reserva es obligatorio.')
        .isInt({ min: 1 }).withMessage('El ID de la reserva debe ser un número entero positivo.'),

    body('monto')
        .notEmpty().withMessage('El monto es obligatorio.')
        .isDecimal({ decimal_digits: '1,2' }).withMessage('El monto debe ser un número decimal válido.'),

    body('metodo_pago')
        .notEmpty().withMessage('El método de pago es obligatorio.')
        .isIn(METODOS_PAGO_VALIDOS).withMessage(`El método de pago debe ser uno de los siguientes: ${METODOS_PAGO_VALIDOS.join(', ')}`)
];

module.exports = {
    pagoValidator,
};
