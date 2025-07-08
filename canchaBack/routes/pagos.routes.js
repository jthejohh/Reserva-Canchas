/*
 * 📂 RUTA: routes/pagos.routes.js
 * 📝 DESCRIPCIÓN: Endpoint para la creación de Pagos.
 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers/pagos.controller');
const { pagoValidator } = require('../validators/pagos.validator');
const { validate } = require('../middlewares/validateRequest');
const verifyToken = require('../middlewares/verifyToken');

// POST /api/pagos - Simular el pago de una reserva
router.post('/', [verifyToken, ...pagoValidator, validate], controller.createPago);

module.exports = router;
