/*
 * 📂 RUTA: config/swagger.js
 * 📝 DESCRIPCIÓN: Configuración para la documentación de la API con Swagger.
 */
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Gestión de Reservas para Canchas Deportivas',
        version: '1.0.0',
        description: 'Documentación completa de la API para el sistema de reservas. Aquí encontrarás todos los endpoints disponibles, sus parámetros, y los esquemas de datos.',
        contact: {
            name: 'Tu Nombre / Nombre de la Empresa',
            email: 'tu.correo@example.com'
        }
    },
    servers: [
        {
            url: `http://localhost:${process.env.PORT || 3000}/api`,
            description: 'Servidor de Desarrollo'
        }
    ],
    // 👇 Definición de componentes reutilizables (esquemas)
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            }
        },
        schemas: {
            Error: {
                type: 'object',
                properties: {
                    error: {
                        type: 'object',
                        properties: {
                            message: { type: 'string', example: 'Mensaje de error descriptivo.' },
                            status: { type: 'integer', example: 500 }
                        }
                    }
                }
            },
            ValidationError: {
                type: 'object',
                properties: {
                    error: {
                        type: 'object',
                        properties: {
                            message: { type: 'string', example: 'Error de validación' },
                            status: { type: 'integer', example: 422 },
                            errors: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        campo_con_error: { type: 'string', example: 'Descripción del error.' }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    security: [
        {
            bearerAuth: []
        }
    ]
};

const options = {
    swaggerDefinition,
    // Rutas a los archivos que contienen las anotaciones de la API
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
