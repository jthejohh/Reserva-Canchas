/*
 * 📂 RUTA: services/pagos.service.js
 * 📝 DESCRIPCIÓN: Lógica de negocio para procesar pagos.
 */
const prisma = require('../config/prisma');
const { createError } = require('../utils/errorHandler');

/**
 * Simula la creación de un pago para una reserva.
 * Utiliza una transacción para garantizar la consistencia de los datos.
 * @param {object} pagoData - Datos del pago { id_reserva, monto, metodo_pago }.
 * @param {number} userId - ID del usuario que realiza el pago.
 * @returns {object} El pago creado.
 */
const create = async (pagoData, userId) => {
    const { id_reserva, monto, metodo_pago } = pagoData;

    // Usamos una transacción para asegurar que ambas operaciones (crear pago y
    // actualizar reserva) se completen exitosamente. Si una falla, ambas se revierten.
    const nuevoPago = await prisma.$transaction(async (tx) => {
        // 1. Validar que la reserva exista, pertenezca al usuario y esté pendiente de pago
        const reserva = await tx.reservas.findUnique({
            where: { id_reserva },
        });

        if (!reserva) {
            throw createError(404, 'Reserva no encontrada.');
        }
        if (reserva.id_usuario !== userId) {
            throw createError(403, 'No tienes permiso para pagar esta reserva.');
        }
        if (reserva.estado !== 'Pendiente_de_Pago') {
            throw createError(409, `La reserva ya no está pendiente de pago. Estado actual: ${reserva.estado}`);
        }
        // Opcional: Validar que el monto del pago coincida con el de la reserva
        if (parseFloat(reserva.monto_total) !== parseFloat(monto)) {
            throw createError(400, 'El monto del pago no coincide con el monto total de la reserva.');
        }

        // 2. Actualizar el estado de la reserva a 'Confirmada'
        await tx.reservas.update({
            where: { id_reserva: id_reserva },
            data: { estado: 'Confirmada' },
        });

        // 3. Crear el registro del pago
        const pagoCreado = await tx.pagos.create({
            data: {
                id_reserva,
                monto,
                metodo_pago,
                // El estado por defecto es 'Completado' según el schema
            },
        });

        return pagoCreado;
    });

    return nuevoPago;
};

module.exports = {
    create,
};
