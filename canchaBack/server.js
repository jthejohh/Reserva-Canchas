/*
 * 📂 RUTA: server.js
 * 📝 DESCRIPCIÓN: Versión final del servidor, con Helmet y Swagger UI.
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// 👇 1. IMPORTAMOS SWAGGER
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const apiRoutes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// 👇 2. CONFIGURAMOS LA RUTA PARA LA DOCUMENTACIÓN
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// --- RUTAS DE LA APLICACIÓN ---
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a la API. Visita /api-docs para ver la documentación.' });
});

// --- MANEJO DE ERRORES ---
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}.`);
    console.log(`📚 Documentación de la API disponible en http://localhost:${PORT}/api-docs`);
});
