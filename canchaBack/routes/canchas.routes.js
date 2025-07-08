/*
 * 📂 RUTA: routes/canchas.routes.js
 * 📝 DESCRIPCIÓN: Endpoints para el CRUD de Canchas.
 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers/canchas.controller');
const { canchaValidator } = require('../validators/canchas.validator');
const { validate } = require('../middlewares/validateRequest');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// --- Rutas Públicas ---
// GET /api/canchas - Obtener todas las canchas
router.get('/', controller.getAllCanchas);

// GET /api/canchas/:id - Obtener una cancha por su ID
router.get('/:id', controller.getCanchaById);


// --- Rutas de Administrador ---
// POST /api/canchas - Crear una nueva cancha
router.post('/', [verifyToken, isAdmin, ...canchaValidator, validate], controller.createCancha);

// PUT /api/canchas/:id - Actualizar una cancha
router.put('/:id', [verifyToken, isAdmin, ...canchaValidator, validate], controller.updateCancha);

// DELETE /api/canchas/:id - Eliminar una cancha
router.delete('/:id', [verifyToken, isAdmin], controller.deleteCancha);

module.exports = router;
