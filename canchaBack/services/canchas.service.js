/*
 * 📂 RUTA: services/canchas.service.js
 * 📝 DESCRIPCIÓN: Lógica de negocio para gestionar las canchas.
 */
const prisma = require('../config/prisma');
const { createError } = require('../utils/errorHandler');

const getAll = async () => {
    return await prisma.canchas.findMany({
        // Incluimos la información de la categoría a la que pertenece cada cancha
        include: {
            categorias_cancha: {
                select: {
                    nombre_categoria: true,
                }
            }
        }
    });
};

const getById = async (id) => {
    const cancha = await prisma.canchas.findUnique({
        where: { id_cancha: parseInt(id) },
        include: {
            categorias_cancha: true // Incluimos el objeto completo de la categoría
        }
    });
    if (!cancha) {
        throw createError(404, 'Cancha no encontrada.');
    }
    return cancha;
};

const create = async (data) => {
    // Prisma se encargará de lanzar un error si el id_categoria no existe
    // debido a la restricción de clave foránea (foreign key).
    return await prisma.canchas.create({ data });
};

const update = async (id, data) => {
    await getById(id); // Verificar que la cancha existe
    return await prisma.canchas.update({
        where: { id_cancha: parseInt(id) },
        data,
    });
};

const remove = async (id) => {
    await getById(id); // Verificar que la cancha existe
    return await prisma.canchas.delete({
        where: { id_cancha: parseInt(id) },
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
