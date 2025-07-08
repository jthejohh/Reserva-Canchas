/*
 * 📂 RUTA: controllers/canchas.controller.js
 * 📝 DESCRIPCIÓN: Controlador para las peticiones del CRUD de canchas.
 */
const service = require('../services/canchas.service');

const getAllCanchas = async (req, res, next) => {
    try {
        const canchas = await service.getAll();
        res.status(200).json(canchas);
    } catch (error) {
        next(error);
    }
};

const getCanchaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const cancha = await service.getById(id);
        res.status(200).json(cancha);
    } catch (error) {
        next(error);
    }
};

const createCancha = async (req, res, next) => {
    try {
        const newCancha = await service.create(req.body);
        res.status(201).json(newCancha);
    } catch (error) {
        next(error);
    }
};

const updateCancha = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedCancha = await service.update(id, req.body);
        res.status(200).json(updatedCancha);
    } catch (error) {
        next(error);
    }
};

const deleteCancha = async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.remove(id);
        res.status(204).send(); // 204 No Content
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllCanchas,
    getCanchaById,
    createCancha,
    updateCancha,
    deleteCancha,
};
