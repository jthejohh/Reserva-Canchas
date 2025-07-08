Sistema de Gestión de Reservas de Canchas Deportivas
Versión: 1.0.0
Fecha: 8 de julio de 2025
Propietario: NovaTech Systems S.A.S.

1. Descripción General del Proyecto
Este repositorio contiene el código fuente completo para un Sistema Web de Gestión de Reservas para Canchas Deportivas. El proyecto está estructurado como un monorepo, conteniendo dos subproyectos principales:

/canchaBack: Una API RESTful robusta construida con Node.js y Express, que maneja toda la lógica de negocio, la interacción con la base de datos y la seguridad.

/canchaFront: Una aplicación de cliente web (Single Page Application) desarrollada con Vanilla JavaScript, HTML5 y CSS3, que consume la API para ofrecer una experiencia de usuario fluida e interactiva.

El sistema permite a los usuarios finales registrarse, explorar canchas, crear y pagar reservas, mientras que proporciona un panel de administración completo para la gestión del negocio.

2. 🚀 Características Principales
Para Usuarios:
Catálogo de Canchas: Visualización de todas las canchas disponibles con imágenes, descripción y tarifa.

Registro y Autenticación: Creación de cuentas de usuario y sistema de login seguro basado en JWT.

Sistema de Reservas: Flujo completo para seleccionar una cancha, elegir fecha y hora, y crear una reserva que queda en estado "Pendiente de Pago".

Gestión de "Mis Reservas": Una sección dedicada donde los usuarios pueden ver el historial y estado de sus reservas, con la opción de pagar aquellas que estén pendientes.

Simulación de Pago: Proceso para confirmar y pagar una reserva, cambiando su estado a "Confirmada".

Para Administradores:
Panel de Administración Seguro: Acceso exclusivo para usuarios con el rol de "Administrador".

Gestión de Categorías (CRUD): Creación, visualización, edición y eliminación de las categorías de las canchas.

Gestión de Canchas (CRUD): Creación, visualización, edición y eliminación de las canchas.

Visualización de Usuarios: Tabla para consultar todos los usuarios registrados en el sistema.

Reportes de Negocio:

Reporte de Uso: Muestra el número total de reservas por cada cancha.

Reporte de Facturación: Muestra los ingresos totales generados.

3. 🛠️ Tecnologías Utilizadas
Backend (/canchaBack)
Node.js con Express.js para la creación del servidor y la API RESTful.

Prisma como ORM para la interacción con la base de datos (compatible con PostgreSQL, MySQL, etc.).

JSON Web Tokens (JWT) para la autenticación y protección de rutas.

express-validator para la validación y saneamiento de los datos de entrada.

bcrypt.js para el hasheo seguro de contraseñas.

cors para gestionar las políticas de Cross-Origin Resource Sharing.

Frontend (/canchaFront)
HTML5 semántico y accesible.

CSS3 para el diseño visual, utilizando variables, Flexbox y CSS Grid para un layout moderno y responsivo.

Vanilla JavaScript (ES6+) para toda la lógica de la interfaz, manipulación del DOM y consumo de la API. Se utilizó una arquitectura modular (import/export) para organizar el código en archivos como api.js, auth.js y main.js.

No se utilizaron frameworks (como React, Vue o Angular), demostrando un dominio de las tecnologías web estándar.

4. ⚙️ Guía de Instalación y Puesta en Marcha Local
Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

Pre-requisitos
Tener instalado Node.js (versión 16 o superior).

Tener instalado Git.

Tener acceso a una base de datos (el proyecto está configurado para PostgreSQL o MySQL).

A. Configuración del Backend
Navega a la carpeta del backend:

cd canchaBack

Instala las dependencias:

npm install

Configura la base de datos:

Crea un archivo .env en la raíz de /canchaBack.

Dentro del .env, añade la cadena de conexión a tu base de datos. Ejemplo para MySQL:
DATABASE_URL="mysql://USUARIO:CONTRASEÑA@HOST:PUERTO/NOMBRE_DB"

Añade también una clave secreta para los JWT:
JWT_SECRET="tu_clave_secreta_super_segura"

Ejecuta las migraciones de Prisma para crear las tablas en tu base de datos:

npx prisma migrate dev

Inicia el servidor del backend:

npm start

El servidor estará corriendo en http://localhost:3000.

B. Configuración del Frontend
El frontend no requiere un proceso de construcción. Simplemente necesitas servir los archivos estáticos.

Asegúrate de que la URL de la API sea la correcta en el archivo canchaFront/js/api.js. Para el desarrollo local, debe ser:

const BASE_URL = 'http://localhost:3000/api';

Usa la extensión "Live Server" en Visual Studio Code:

Haz clic derecho sobre el archivo canchaFront/index.html.

Selecciona "Open with Live Server".

Esto abrirá la aplicación en tu navegador y podrás empezar a interactuar con ella.

5. Documentación Detallada de la API
5.1. Autenticación
La API utiliza JSON Web Tokens (JWT). Para acceder a los endpoints protegidos, el cliente debe incluir el token en la cabecera Authorization utilizando el esquema Bearer.

Ejemplo de Cabecera: Authorization: Bearer <tu_jwt_aqui>

5.2. Endpoints
<details>
<summary><strong>Módulo de Autenticación (/auth)</strong></summary>

POST /auth/register

Descripción: Registra un nuevo usuario.

Permiso: Público.

Cuerpo: { "nombre", "apellido", "correo_electronico", "contraseña", "telefono" }

Respuesta Exitosa (201): { "message": "Usuario registrado exitosamente." }

POST /auth/login

Descripción: Autentica a un usuario y devuelve un JWT.

Permiso: Público.

Cuerpo: { "correo_electronico", "contraseña" }

Respuesta Exitosa (200): { "message": "Autenticación exitosa.", "token": "...", "user": { ... } }

</details>

<details>
<summary><strong>Módulo de Canchas (/canchas)</strong></summary>

GET /canchas

Descripción: Obtiene una lista de todas las canchas.

Permiso: Público.

POST /canchas

Descripción: Crea una nueva cancha.

Permiso: Administrador.

Cuerpo: { "nombre", "descripcion", "tarifa_por_hora", "estado", "id_categoria" }

PUT /canchas/:id

Descripción: Actualiza una cancha existente.

Permiso: Administrador.

DELETE /canchas/:id

Descripción: Elimina una cancha.

Permiso: Administrador.

</details>

<details>
<summary><strong>Módulo de Reservas (/reservas)</strong></summary>

POST /reservas

Descripción: Crea una nueva reserva para el usuario autenticado.

Permiso: Usuario Autenticado.

Cuerpo: { "id_cancha", "fecha_hora_inicio" }

Respuesta Exitosa (201): Objeto de la reserva creada con estado "PendienteDePago".

GET /reservas/mis-reservas

Descripción: Obtiene el historial de reservas del usuario autenticado.

Permiso: Usuario Autenticado.

GET /reservas

Descripción: Obtiene todas las reservas del sistema.

Permiso: Administrador.

</details>

<details>
<summary><strong>Módulo de Pagos (/pagos)</strong></summary>

POST /pagos

Descripción: Simula el pago de una reserva. Cambia el estado de la reserva a "Confirmada".

Permiso: Usuario Autenticado.

Cuerpo: { "id_reserva", "monto", "metodo_pago" }

</details>

<details>
<summary><strong>Módulo de Reportes (/reportes)</strong></summary>

GET /reportes/uso-canchas

Descripción: Genera un reporte sobre la cantidad de reservas por cancha.

Permiso: Administrador.

GET /reportes/facturacion

Descripción: Genera un reporte de los ingresos totales.

Permiso: Administrador.

</details>

6. Manejo de Errores
La API utiliza los códigos de estado HTTP estándar para indicar el resultado de una solicitud.

Código

Significado

200

OK

201

Created

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

409

Conflict

422

Unprocessable Entity

500

Internal Server Error

