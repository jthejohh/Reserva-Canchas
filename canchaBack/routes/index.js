/*
 * 📂 RUTA: routes/index.js
 * 📝 DESCRIPCIÓN: Este es el enrutador principal. Su única función es
 * centralizar todas las rutas de la aplicación.
 */
const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const userRoutes = require('./users.routes');
const categoriaRoutes = require('./categorias.routes');
const canchaRoutes = require('./canchas.routes');
const reservaRoutes = require('./reservas.routes');
const pagoRoutes = require('./pagos.routes');
const reporteRoutes = require('./reportes.routes');

// Cuando una petición llegue a /api/auth, será manejada por authRoutes
router.use('/auth', authRoutes);



router.use('/users', userRoutes);


router.use('/categorias', categoriaRoutes);


router.use('/canchas', canchaRoutes);


router.use('/reservas', reservaRoutes);


router.use('/pagos', pagoRoutes);


router.use('/reportes', reporteRoutes);


// Más adelante añadiremos otras rutas aquí
// router.use('/canchas', canchasRoutes);

module.exports = router;
