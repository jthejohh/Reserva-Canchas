/*
 * 📂 RUTA: services/users.service.js
 * 📝 DESCRIPCIÓN: Lógica de negocio para obtener datos de los usuarios.
 */
const prisma = require('../config/prisma');

// Servicio para obtener todos los usuarios
const getAll = async () => {
    const users = await prisma.usuarios.findMany({
        // Excluimos el campo de la contraseña por seguridad
        select: {
            id_usuario: true,
            nombre: true,
            apellido: true,
            correo_electronico: true,
            telefono: true,
            fecha_registro: true,
            roles: {
                select: {
                    nombre_rol: true,
                }
            }
        }
    });
    return users;
};

// Servicio para obtener un usuario por su ID
const getById = async (id) => {
    const user = await prisma.usuarios.findUnique({
        where: { id_usuario: parseInt(id) },
        // Excluimos el campo de la contraseña por seguridad
        select: {
            id_usuario: true,
            nombre: true,
            apellido: true,
            correo_electronico: true,
            telefono: true,
            fecha_registro: true,
            roles: {
                select: {
                    nombre_rol: true,
                }
            }
        }
    });
    return user;
};

module.exports = {
    getAll,
    getById,
};
