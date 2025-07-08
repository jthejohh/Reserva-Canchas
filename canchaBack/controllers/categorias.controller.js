/*
 * 📂 RUTA: controllers/categorias.controller.js
 * 📝 DESCRIPCIÓN: Controlador para las peticiones del CRUD de categorías.
 */
const service = require('../services/categorias.service');

const getAllCategorias = async (req, res, next) => {
    try {
        const categorias = await service.getAll();
        res.status(200).json(categorias);
    } catch (error) {
        next(error);
    }
};

const createCategoria = async (req, res, next) => {
    try {
        const newCategoria = await service.create(req.body);
        res.status(201).json(newCategoria);
    } catch (error) {
        next(error);
    }
};

const updateCategoria = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedCategoria = await service.update(id, req.body);
        res.status(200).json(updatedCategoria);
    } catch (error) {
        next(error);
    }
};

const deleteCategoria = async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.remove(id);
        res.status(204).send(); // 204 No Content
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria,
};
