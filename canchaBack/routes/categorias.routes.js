/*
 * 📂 RUTA: routes/categorias.routes.js
 * 📝 DESCRIPCIÓN: Endpoints para el CRUD de Categorías.
 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers/categorias.controller');
const { categoriaValidator } = require('../validators/categorias.validator');
const { validate } = require('../middlewares/validateRequest');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// --- Rutas Públicas ---
// GET /api/categorias - Obtener todas las categorías
router.get('/', controller.getAllCategorias);

// --- Rutas de Administrador ---
// POST /api/categorias - Crear una nueva categoría
router.post('/', [verifyToken, isAdmin, ...categoriaValidator, validate], controller.createCategoria);

// PUT /api/categorias/:id - Actualizar una categoría
router.put('/:id', [verifyToken, isAdmin, ...categoriaValidator, validate], controller.updateCategoria);

// DELETE /api/categorias/:id - Eliminar una categoría
router.delete('/:id', [verifyToken, isAdmin], controller.deleteCategoria);

module.exports = router;
