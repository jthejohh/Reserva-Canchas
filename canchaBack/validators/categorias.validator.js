/*
 * 📂 RUTA: validators/categorias.validator.js
 * 📝 DESCRIPCIÓN: Reglas de validación para los endpoints de categorías.
 */
const { body } = require('express-validator');

const categoriaValidator = [
    body('nombre_categoria')
        .notEmpty().withMessage('El nombre de la categoría es obligatorio.')
        .isString().withMessage('El nombre debe ser una cadena de texto.')
        .trim(),
    body('descripcion')
        .optional()
        .isString().withMessage('La descripción debe ser una cadena de texto.')
        .trim()
];

module.exports = {
    categoriaValidator,
};
