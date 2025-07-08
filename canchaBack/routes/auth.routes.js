/*
 * 📂 RUTA: routes/auth.routes.js
 */
const express = require('express');
const router = express.Router();
const { registerController, loginController } = require('../controllers/auth.controller');

/**
 * @swagger
 * tags:
 * name: Autenticación
 * description: Endpoints para el registro e inicio de sesión de usuarios.
 */

/**
 * @swagger
 * /auth/register:
 * post:
 * summary: Registra un nuevo usuario en el sistema.
 * tags: [Autenticación]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required:
 * - nombre
 * - apellido
 * - correo_electronico
 * - contraseña
 * properties:
 * nombre:
 * type: string
 * example: "Juan"
 * apellido:
 * type: string
 * example: "Pérez"
 * correo_electronico:
 * type: string
 * format: email
 * example: "juan.perez@example.com"
 * contraseña:
 * type: string
 * format: password
 * example: "password123"
 * telefono:
 * type: string
 * example: "3001234567"
 * responses:
 * '201':
 * description: Usuario registrado exitosamente.
 * '409':
 * description: El correo electrónico ya está registrado.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Error'
 */
router.post('/register', registerController);

/**
 * @swagger
 * /auth/login:
 * post:
 * summary: Inicia sesión y obtiene un token JWT.
 * tags: [Autenticación]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required:
 * - correo_electronico
 * - contraseña
 * properties:
 * correo_electronico:
 * type: string
 * format: email
 * example: "juan.perez@example.com"
 * contraseña:
 * type: string
 * format: password
 * example: "password123"
 * responses:
 * '200':
 * description: Inicio de sesión exitoso.
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * message:
 * type: string
 * example: "Inicio de sesión exitoso"
 * token:
 * type: string
 * example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * '401':
 * description: Credenciales inválidas.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Error'
 */
router.post('/login', loginController);

module.exports = router;
