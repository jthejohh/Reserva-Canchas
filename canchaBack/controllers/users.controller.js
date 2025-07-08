/*
 * 📂 RUTA: controllers/users.controller.js
 * 📝 DESCRIPCIÓN: Controlador para las peticiones relacionadas con usuarios.
 */
const usersService = require('../services/users.service');
const { createError } = require('../utils/errorHandler');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await usersService.getAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await usersService.getById(id);
        if (!user) {
            return next(createError(404, 'Usuario no encontrado'));
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
};
