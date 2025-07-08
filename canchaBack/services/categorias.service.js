/*
 * 📂 RUTA: services/categorias.service.js
 * 📝 DESCRIPCIÓN: Lógica de negocio para gestionar las categorías de canchas.
 */
const prisma = require('../config/prisma');
const { createError } = require('../utils/errorHandler');

const getAll = async () => {
    return await prisma.categorias_cancha.findMany();
};

const getById = async (id) => {
    const categoria = await prisma.categorias_cancha.findUnique({
        where: { id_categoria: parseInt(id) },
    });
    if (!categoria) {
        throw createError(404, 'Categoría no encontrada.');
    }
    return categoria;
};

const create = async (data) => {
    return await prisma.categorias_cancha.create({ data });
};

const update = async (id, data) => {
    // Primero verificamos si existe para lanzar un 404 si no
    await getById(id);
    return await prisma.categorias_cancha.update({
        where: { id_categoria: parseInt(id) },
        data,
    });
};

const remove = async (id) => {
    // Primero verificamos si existe
    await getById(id);
    return await prisma.categorias_cancha.delete({
        where: { id_categoria: parseInt(id) },
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
