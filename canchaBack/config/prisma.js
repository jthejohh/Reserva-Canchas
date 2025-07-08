/*
 * 📂 RUTA: config/prisma.js
 * 📝 DESCRIPCIÓN: Centraliza la instancia del cliente de Prisma para que 
 * podamos importarla fácilmente en cualquier parte de la aplicación.
 */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma;
