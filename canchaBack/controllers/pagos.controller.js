/*
 * 📂 RUTA: controllers/pagos.controller.js
 * 📝 DESCRIPCIÓN: Controlador para las peticiones de Pagos.
 */
const service = require('../services/pagos.service');

const createPago = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const nuevoPago = await service.create(req.body, userId);
        res.status(201).json({
            message: 'Pago procesado y reserva confirmada exitosamente.',
            pago: nuevoPago
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPago,
};
