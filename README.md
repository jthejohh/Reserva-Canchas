Sistema de Gestión de Reservas de Canchas Deportivas
Este repositorio contiene el código fuente completo, tanto del backend como del frontend, para un sistema web de gestión y reserva de canchas deportivas. La aplicación permite a los usuarios ver la disponibilidad, registrarse, reservar y pagar, mientras que ofrece un panel de administración completo para la gestión del negocio.

🚀 Características Principales
Para Usuarios:
Catálogo de Canchas: Visualización de todas las canchas disponibles con su descripción y tarifa.

Registro y Autenticación: Creación de cuentas de usuario y sistema de login seguro basado en JWT (JSON Web Tokens).

Sistema de Reservas: Flujo completo para seleccionar una cancha, elegir fecha y hora, y crear una reserva.

Gestión de Reservas Propias: Una sección de "Mis Reservas" donde los usuarios pueden ver el estado de sus reservas y pagar aquellas que estén pendientes.

Simulación de Pago: Proceso para confirmar y pagar una reserva, cambiando su estado a "Confirmada".

Para Administradores:
Panel de Administración Seguro: Acceso exclusivo para usuarios con el rol de "Administrador".

Gestión de Categorías (CRUD): Creación, visualización, edición y eliminación de las categorías de las canchas (ej. "Fútbol 5", "Tenis", "Baloncesto").

Gestión de Canchas (CRUD): Creación, visualización, edición y eliminación de las canchas, asignándoles una categoría, tarifa y estado.

Visualización de Usuarios: Tabla para consultar todos los usuarios registrados en el sistema.

Reportes de Negocio:

Reporte de Uso: Muestra el número total de reservas por cada cancha.

Reporte de Facturación: Muestra los ingresos totales generados por los pagos de las reservas.

🛠️ Tecnologías Utilizadas
Este proyecto está dividido en dos partes principales:

Backend (/canchaBack)
Node.js con Express.js para la creación del servidor y la API RESTful.

Prisma como ORM para la interacción con la base de datos PostgreSQL.

JSON Web Tokens (JWT) para la autenticación y protección de rutas.

express-validator para la validación de los datos de entrada en la API.

Frontend (/canchaFront)
HTML5 semántico y accesible.

CSS3 para el diseño visual, utilizando Flexbox y CSS Grid para un layout responsivo.

Vanilla JavaScript (ES6+) para toda la lógica de la interfaz, manipulación del DOM y consumo de la API.

No se utilizaron frameworks como React, Vue o Angular, enfocándose en el uso puro de tecnologías web estándar.

⚙️ Guía de Instalación y Puesta en Marcha Local
Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

Pre-requisitos
Tener instalado Node.js (versión 16 o superior).

Tener instalado Git.

Tener acceso a una base de datos PostgreSQL.

1. Configuración del Backend
# 1. Clona el repositorio (si aún no lo has hecho)
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

# 2. Navega a la carpeta del backend
cd canchaBack

# 3. Instala las dependencias de Node.js
npm install

# 4. Configura la base de datos
#    - Crea un archivo .env en la raíz de /canchaBack.
#    - Añade tu cadena de conexión a PostgreSQL:
#      DATABASE_URL="postgresql://USUARIO:CONTRASEÑA@HOST:PUERTO/NOMBRE_DB"
#    - También añade una clave secreta para los JWT:
#      JWT_SECRET="tu_clave_secreta_aqui"

# 5. Ejecuta las migraciones de Prisma para crear las tablas en tu base de datos
npx prisma migrate dev

# 6. Inicia el servidor del backend
npm start

Si todo ha ido bien, verás un mensaje en la consola indicando que el servidor está corriendo en http://localhost:3000.

2. Configuración del Frontend
El frontend no requiere un proceso de construcción. Simplemente necesitas servir los archivos estáticos.

La forma más sencilla es usar la extensión Live Server en Visual Studio Code:

Abre la carpeta del proyecto (RESERCAN) en VS Code.

Haz clic derecho sobre el archivo canchaFront/index.html.

Selecciona "Open with Live Server".

Esto abrirá la aplicación en tu navegador en una dirección como http://127.0.0.1:5500/canchaFront/index.html y podrás empezar a interactuar con ella.

¡Gracias por revisar este proyecto!