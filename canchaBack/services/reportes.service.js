/*
 * 📂 RUTA: services/reportes.service.js
 * 📝 DESCRIPCIÓN: Lógica de negocio para generar reportes.
 */
const prisma = require('../config/prisma');

/**
 * Genera un reporte del uso de las canchas.
 * @returns {Array} Un array con el conteo de reservas por cancha.
 */
const getUsoCanchas = async () => {
    const uso = await prisma.reservas.groupBy({
        by: ['id_cancha'],
        _count: {
            id_reserva: true,
        },
        where: {
            estado: { notIn: ['Cancelada'] } // Opcional: contar solo reservas válidas
        },
        orderBy: {
            _count: {
                id_reserva: 'desc',
            },
        },
    });

    // Para enriquecer el reporte, obtenemos los nombres de las canchas
    const canchasIds = uso.map(item => item.id_cancha);
    const canchas = await prisma.canchas.findMany({
        where: { id_cancha: { in: canchasIds } },
        select: { id_cancha: true, nombre: true }
    });

    // Mapeamos los nombres a los resultados
    const reporte = uso.map(item => {
        const canchaInfo = canchas.find(c => c.id_cancha === item.id_cancha);
        return {
            id_cancha: item.id_cancha,
            nombre_cancha: canchaInfo ? canchaInfo.nombre : 'Desconocida',
            numero_de_reservas: item._count.id_reserva,
        };
    });

    return reporte;
};

/**
 * Genera un reporte de facturación total.
 * @returns {object} Un objeto con el total facturado y el número de pagos.
 */
const getFacturacion = async () => {
    const facturacion = await prisma.pagos.aggregate({
        _sum: {
            monto: true,
        },
        _count: {
            id_pago: true,
        },
        where: {
            estado_pago: 'Completado' // Contar solo pagos completados
        }
    });

    return {
        ingresos_totales: facturacion._sum.monto || 0,
        numero_de_pagos: facturacion._count.id_pago || 0,
    };
};

module.exports = {
    getUsoCanchas,
    getFacturacion,
};
