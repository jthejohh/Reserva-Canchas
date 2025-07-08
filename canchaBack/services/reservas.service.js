/*
 * 📂 RUTA: services/reservas.service.js
 * 📝 DESCRIPCIÓN: Lógica de negocio para gestionar las reservas.
 */
const prisma = require('../config/prisma');
const { createError } = require('../utils/errorHandler');

/**
 * Crea una nueva reserva, validando la disponibilidad de la cancha.
 * @param {object} reservaData - Datos de la reserva { id_cancha, fecha_hora_inicio, fecha_hora_fin }.
 * @param {number} userId - ID del usuario que realiza la reserva.
 * @returns {object} La reserva creada.
 */
const create = async (reservaData, userId) => {
    const { id_cancha, fecha_hora_inicio, fecha_hora_fin } = reservaData;

    const inicio = new Date(fecha_hora_inicio);
    const fin = new Date(fecha_hora_fin);

    // 1. Validar que la hora de fin sea posterior a la de inicio
    if (inicio >= fin) {
        throw createError(400, 'La fecha de fin debe ser posterior a la fecha de inicio.');
    }

    // 2. Lógica CRÍTICA: Verificar si ya existe una reserva para esa cancha en el mismo horario.
    // Una reserva se solapa si (su inicio < mi fin) Y (su fin > mi inicio)
    const overlappingReserva = await prisma.reservas.findFirst({
        where: {
            id_cancha: id_cancha,
            estado: { notIn: ['Cancelada'] }, // No considerar reservas canceladas
            AND: [
                { fecha_hora_inicio: { lt: fin } },
                { fecha_hora_fin: { gt: inicio } },
            ],
        },
    });

    if (overlappingReserva) {
        throw createError(409, 'Conflicto: La cancha ya está reservada en este horario. Por favor, elige otro.');
    }

    // 3. Calcular el monto total basado en la tarifa de la cancha
    const cancha = await prisma.canchas.findUnique({ where: { id_cancha } });
    if (!cancha || cancha.estado !== 'Disponible') {
        throw createError(404, 'La cancha no existe o no está disponible para ser reservada.');
    }

    const duracionMilisegundos = fin.getTime() - inicio.getTime();
    const duracionHoras = duracionMilisegundos / (1000 * 60 * 60);
    const monto_total = parseFloat(cancha.tarifa_por_hora) * duracionHoras;

    // 4. Crear la reserva
    return await prisma.reservas.create({
        data: {
            fecha_hora_inicio: inicio,
            fecha_hora_fin: fin,
            monto_total: monto_total,
            id_usuario: userId,
            id_cancha: id_cancha,
            // El estado por defecto es 'Pendiente_de_Pago' según el schema
        },
    });
};

/**
 * Obtiene el historial de reservas de un usuario específico.
 * @param {number} userId - ID del usuario.
 * @returns {Array} Lista de reservas del usuario.
 */
const getByUserId = async (userId) => {
    return await prisma.reservas.findMany({
        where: { id_usuario: userId },
        include: {
            canchas: {
                select: { nombre: true, descripcion: true }
            }
        },
        orderBy: {
            fecha_hora_inicio: 'desc'
        }
    });
};

/**
 * Permite a un usuario cancelar su propia reserva.
 * @param {number} reservaId - ID de la reserva a cancelar.
 * @param {number} userId - ID del usuario que intenta cancelar.
 * @returns {object} La reserva actualizada.
 */
const cancel = async (reservaId, userId) => {
    const reserva = await prisma.reservas.findUnique({
        where: { id_reserva: parseInt(reservaId) }
    });

    if (!reserva) {
        throw createError(404, 'Reserva no encontrada.');
    }
    if (reserva.id_usuario !== userId) {
        throw createError(403, 'No tienes permiso para cancelar esta reserva.');
    }
    if (reserva.estado !== 'Pendiente_de_Pago' && reserva.estado !== 'Confirmada') {
        throw createError(409, `No se puede cancelar una reserva en estado '${reserva.estado}'.`);
    }

    return await prisma.reservas.update({
        where: { id_reserva: parseInt(reservaId) },
        data: { estado: 'Cancelada' }
    });
};

// --- Funciones de Administrador ---

const getAll = async () => {
    return await prisma.reservas.findMany({
        include: {
            canchas: { select: { nombre: true } },
            usuarios: { select: { nombre: true, apellido: true } }
        },
        orderBy: {
            fecha_hora_inicio: 'desc'
        }
    });
};

const updateStatus = async (reservaId, newStatus) => {
    // Validar que el estado sea uno de los definidos en el enum del schema
    const validStates = ['Pendiente_de_Pago', 'Confirmada', 'Cancelada', 'Completada'];
    if (!validStates.includes(newStatus)) {
        throw createError(400, 'El estado proporcionado no es válido.');
    }

    await prisma.reservas.findUniqueOrThrow({
        where: { id_reserva: parseInt(reservaId) }
    }).catch(() => { throw createError(404, 'Reserva no encontrada.') });

    return await prisma.reservas.update({
        where: { id_reserva: parseInt(reservaId) },
        data: { estado: newStatus }
    });
};

module.exports = {
    create,
    getByUserId,
    cancel,
    getAll,
    updateStatus,
};
