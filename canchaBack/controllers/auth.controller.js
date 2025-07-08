/*
 * 📂 RUTA: controllers/auth.controller.js
 * 📝 DESCRIPCIÓN: El controlador actúa como intermediario. Recibe la petición,
 * llama al servicio correspondiente y devuelve la respuesta al cliente.
 */
const authService = require('../services/auth.service');

const registerController = async (req, res, next) => {
    try {
        const newUser = await authService.register(req.body);
        // No devolvemos el hash de la contraseña por seguridad
        const { contraseña_hash, ...userResponse } = newUser;
        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            user: userResponse,
        });
    } catch (error) {
        next(error); // Pasa el error al siguiente middleware (el de errores)
    }
};

const loginController = async (req, res, next) => {
    try {
        const { correo_electronico, contraseña } = req.body;
        const token = await authService.login(correo_electronico, contraseña);
        res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token: token,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerController,
    loginController,
};
