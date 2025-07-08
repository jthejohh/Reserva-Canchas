/*
 * 📂 RUTA: services/auth.service.js
 * 📝 DESCRIPCIÓN: Contiene toda la lógica de negocio para la autenticación.
 */
const prisma = require('../config/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createError } = require('../utils/errorHandler');

// Servicio para registrar un nuevo usuario
const register = async (userData) => {
    const { nombre, apellido, correo_electronico, contraseña, telefono } = userData;

    const existingUser = await prisma.usuarios.findUnique({
        where: { correo_electronico },
    });
    if (existingUser) {
        throw createError(409, 'El correo electrónico ya está registrado.');
    }

    const salt = await bcrypt.genSalt(10);
    const contraseña_hash = await bcrypt.hash(contraseña, salt);

    const userRole = await prisma.roles.findFirst({
        where: { nombre_rol: 'Usuario' },
    });
    if (!userRole) {
        throw createError(500, "El rol por defecto 'Usuario' no se encontró.");
    }

    const newUser = await prisma.usuarios.create({
        data: {
            nombre,
            apellido,
            correo_electronico,
            contrase_a_hash: contraseña_hash,
            telefono,
            id_rol: userRole.id_rol,
        },
    });

    return newUser;
};

// Servicio para iniciar sesión
const login = async (correo_electronico, contraseña) => {
    // 1. Buscar al usuario por su correo
    const user = await prisma.usuarios.findUnique({
        where: { correo_electronico },
        // 👇 LÍNEA 1 CORREGIDA: Usamos 'roles' para incluir la relación
        include: { roles: true },
    });
    if (!user) {
        throw createError(401, 'Credenciales inválidas.');
    }

    // 2. Comparar la contraseña ingresada con la hasheada en la BD
    const isMatch = await bcrypt.compare(contraseña, user.contrase_a_hash);
    if (!isMatch) {
        throw createError(401, 'Credenciales inválidas.');
    }

    // 3. Crear el payload del token
    const payload = {
        id: user.id_usuario,
        // 👇 LÍNEA 2 CORREGIDA: Leemos el nombre del rol desde 'user.roles'
        rol: user.roles.nombre_rol,
        nombre: user.nombre,
    };

    // 4. Firmar el token JWT
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '24h',
    });

    return token;
};

module.exports = {
    register,
    login,
};
