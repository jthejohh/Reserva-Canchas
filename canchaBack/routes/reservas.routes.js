/*
 * 📂 RUTA: routes/reservas.routes.js
 * 📝 DESCRIPCIÓN: Endpoints para la gestión de Reservas.
 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers/reservas.controller');
const { crearReservaValidator } = require('../validators/reservas.validator');
const { validate } = require('../middlewares/validateRequest');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// --- Rutas de Usuario Autenticado ---
// Todas las rutas de aquí para abajo requieren un token válido
router.use(verifyToken);

// POST /api/reservas - Crear una nueva reserva
router.post('/', [...crearReservaValidator, validate], controller.createReserva);

// GET /api/reservas/mis-reservas - Ver mi historial de reservas
router.get('/mis-reservas', controller.getMisReservas);

// PUT /api/reservas/:id/cancelar - Cancelar una de mis reservas
router.put('/:id/cancelar', controller.cancelarReserva);


// --- Rutas de Administrador ---
// GET /api/reservas - Ver todas las reservas del sistema
router.get('/', isAdmin, controller.getAllReservas);

// PUT /api/reservas/:id - Modificar el estado de cualquier reserva
router.put('/:id', isAdmin, controller.updateReservaStatus);

module.exports = router;
