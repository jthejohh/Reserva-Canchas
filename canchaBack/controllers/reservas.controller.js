/*
 * 📂 RUTA: controllers/reservas.controller.js
 * 📝 DESCRIPCIÓN: Controlador para las peticiones de Reservas.
 */
const service = require('../services/reservas.service');

const createReserva = async (req, res, next) => {
    try {
        // El ID del usuario lo obtenemos del token, que fue adjuntado por el middleware verifyToken
        const userId = req.user.id;
        const newReserva = await service.create(req.body, userId);
        res.status(201).json(newReserva);
    } catch (error) {
        next(error);
    }
};

const getMisReservas = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const reservas = await service.getByUserId(userId);
        res.status(200).json(reservas);
    } catch (error) {
        next(error);
    }
};

const cancelarReserva = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const updatedReserva = await service.cancel(id, userId);
        res.status(200).json(updatedReserva);
    } catch (error) {
        next(error);
    }
};

// --- Controladores de Administrador ---

const getAllReservas = async (req, res, next) => {
    try {
        const reservas = await service.getAll();
        res.status(200).json(reservas);
    } catch (error) {
        next(error);
    }
};

const updateReservaStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        if (!estado) {
            return next(createError(400, 'El campo "estado" es requerido.'));
        }
        const updatedReserva = await service.updateStatus(id, estado);
        res.status(200).json(updatedReserva);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createReserva,
    getMisReservas,
    cancelarReserva,
    getAllReservas,
    updateReservaStatus,
};
