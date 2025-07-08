// js/auth.js
import api from './api.js';

/**
 * Objeto que maneja la lógica de autenticación: login, registro, logout
 * y consulta del estado de autenticación del usuario.
 */
const auth = {
    /**
     * Inicia sesión llamando a la API y guarda el token JWT en localStorage.
     * @param {string} email - El correo electrónico del usuario.
     * @param {string} password - La contraseña del usuario.
     * @returns {Promise<object>} - La respuesta de la API, que incluye el token.
     */
    async login(email, password) {
        try {
            // Llama al endpoint de login de la API.
            const response = await api.post('/auth/login', {
                correo_electronico: email,
                contraseña: password,
            }); // [cite: 30]

            // Si la API devuelve un token, lo guardamos.
            if (response.token) {
                localStorage.setItem('jwt_token', response.token);
                // Opcional: Si la respuesta del login incluyera el rol, lo guardaríamos también.
                // localStorage.setItem('user_role', response.user.role);
                console.log('Inicio de sesión exitoso.');
            }
            return response;
        } catch (error) {
            console.error('Error en el inicio de sesión:', error.message);
            throw error; // Propagamos el error para que la UI pueda mostrar un mensaje.
        }
    },



    /**
     * Registra un nuevo usuario en el sistema.
     * @param {object} userData - Objeto con los datos del usuario.
     * @returns {Promise<object>} - La respuesta de la API.
     */
    async register(userData) {
        try {
            // Llama al endpoint de registro con los datos del formulario.
            const response = await api.post('/auth/register', userData); // [cite: 24, 26]
            console.log('Registro exitoso.');
            return response;
        } catch (error) {
            console.error('Error en el registro:', error.message);
            throw error;
        }
    },


    // AÑADE ESTA FUNCIÓN DENTRO DEL OBJETO 'auth' EN auth.js

    getUser() {
        const token = this.getToken();
        if (!token) {
            return null;
        }
        try {
            // El token JWT se compone de 3 partes separadas por puntos.
            // El payload (que contiene los datos del usuario) es la segunda parte.
            // La decodificamos de Base64 a JSON.
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload; // El payload contiene id, rol, nombre, etc.
        } catch (e) {
            console.error('Error al decodificar el token:', e);
            // Si el token está malformado, tratamos al usuario como no logueado.
            this.logout();
            return null;
        }
    },

    /**
     * Cierra la sesión del usuario eliminando el token de localStorage.
     */
    logout() {
        localStorage.removeItem('jwt_token');
        // localStorage.removeItem('user_role'); // Eliminar también el rol si se guarda.
        console.log('Sesión cerrada.');
        // Opcional: Redirigir o refrescar la página para actualizar la UI.
        window.location.reload();
    },

    /**
     * Verifica si el usuario está actualmente autenticado.
     * @returns {boolean} - True si hay un token, false si no.
     */
    isAuthenticated() {
        return localStorage.getItem('jwt_token') !== null;
    },

    /**
     * Obtiene el token JWT del usuario autenticado.
     * @returns {string|null} - El token JWT o null si no existe.
     */
    getToken() {
        return localStorage.getItem('jwt_token');
    },
};

export default auth;