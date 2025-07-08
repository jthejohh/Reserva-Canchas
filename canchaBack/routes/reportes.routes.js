/*
 * 📂 RUTA: routes/reportes.routes.js
 * 📝 DESCRIPCIÓN: Endpoints para la generación de Reportes (Solo Admin).
 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers/reportes.controller');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// Todas las rutas de reportes requieren ser administrador
router.use(verifyToken, isAdmin);

// GET /api/reportes/uso-canchas
router.get('/uso-canchas', controller.getReporteUsoCanchas);

// GET /api/reportes/facturacion
router.get('/facturacion', controller.getReporteFacturacion);

module.exports = router;
