/*
 * 📂 RUTA: controllers/reportes.controller.js
 * 📝 DESCRIPCIÓN: Controlador para las peticiones de Reportes.
 */
const service = require('../services/reportes.service');

const getReporteUsoCanchas = async (req, res, next) => {
    try {
        const reporte = await service.getUsoCanchas();
        res.status(200).json(reporte);
    } catch (error) {
        next(error);
    }
};

const getReporteFacturacion = async (req, res, next) => {
    try {
        const reporte = await service.getFacturacion();
        res.status(200).json(reporte);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getReporteUsoCanchas,
    getReporteFacturacion,
};
