/*
 * 📂 RUTA: routes/users.routes.js
 * 📝 DESCRIPCIÓN: Define las rutas para la gestión de usuarios y las protege.
 */
const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('../controllers/users.controller');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

// Para acceder a estas rutas, se debe pasar por dos guardianes:
// 1. verifyToken: ¿La petición tiene un token válido?
// 2. isAdmin: ¿El usuario del token es Administrador?

// GET /api/users
router.get('/', [verifyToken, isAdmin], getAllUsers);

// GET /api/users/:id
router.get('/:id', [verifyToken, isAdmin], getUserById);

module.exports = router;
