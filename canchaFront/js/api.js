// js/api.js

const BASE_URL = 'http://localhost:3000/api';

const api = {
    async request(endpoint, method, body = null, isProtected = false) {
        const url = `${BASE_URL}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
        };

        if (isProtected) {
            const token = localStorage.getItem('jwt_token');
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            } else {
                return Promise.reject('No autorizado');
            }
        }

        const config = {
            method: method,
            headers: headers,
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        try {
            const response = await fetch(url, config);

            // --- LÓGICA MEJORADA AQUÍ ---
            // Si el error es 403, significa que el token es malo.
            if (response.status === 403 && isProtected) {
                // Borramos el token inválido.
                localStorage.removeItem('jwt_token');
                // Forzamos al usuario a la página de inicio para que vuelva a loguearse.
                // Usamos un alert para notificar al usuario.
                alert('Tu sesión ha expirado. Por favor, inicia sesión de nuevo.');
                window.location.reload(); // Recargamos la página
                return Promise.reject({ message: 'Token inválido o expirado.' });
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `Error del servidor: ${response.status}`);
            }

            return data;
        } catch (error) {
            console.error(`Error en la petición a ${url}:`, error);
            throw error;
        }
    },

    get(endpoint, isProtected = false) {
        return this.request(endpoint, 'GET', null, isProtected);
    },

    post(endpoint, body, isProtected = false) {
        return this.request(endpoint, 'POST', body, isProtected);
    },

    put(endpoint, body, isProtected = true) {
        return this.request(endpoint, 'PUT', body, isProtected);
    },

    delete(endpoint, isProtected = true) {
        return this.request(endpoint, 'DELETE', null, isProtected);
    },
};

export default api;