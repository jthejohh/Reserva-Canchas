import api from './api.js';
import auth from './auth.js';

// --- FUNCIÓN GLOBAL PARA MANEJAR EL HEADER ---
function actualizarHeader() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;

    const user = auth.getUser();
    nav.innerHTML = ''; // Limpiar header

    if (user) {
        // --- Usuario Logueado ---
        nav.innerHTML += `<span class="nav-welcome">Hola, ${user.nombre}</span>`;
        nav.innerHTML += `<button id="home-btn" class="nav-button">Ver Canchas</button>`;
        nav.innerHTML += `<button id="mis-reservas-btn" class="nav-button">Mis Reservas</button>`;
        
        if (user.rol === 'Administrador') {
            nav.innerHTML += `<a href="admin.html" class="nav-link">Panel Admin</a>`;
        }
        
        nav.innerHTML += `<button id="logout-btn" class="nav-button">Cerrar Sesión</button>`;
        
        document.getElementById('logout-btn').addEventListener('click', () => {
            auth.logout();
            window.location.reload();
        });

        document.getElementById('mis-reservas-btn').addEventListener('click', () => {
            document.getElementById('canchas-view').style.display = 'none';
            document.getElementById('mis-reservas-view').style.display = 'block';
        });

        document.getElementById('home-btn').addEventListener('click', () => {
            document.getElementById('mis-reservas-view').style.display = 'none';
            document.getElementById('canchas-view').style.display = 'block';
        });

    } else {
        // --- Usuario No Logueado ---
        nav.innerHTML = `
            <a href="registro.html" class="nav-link nav-link-secondary">Registrarme</a>
            <button id="login-header-btn" class="nav-button">Iniciar Sesión</button>
        `;
        document.getElementById('login-header-btn').addEventListener('click', () => {
            document.getElementById('login-modal').style.display = 'flex';
        });
    }
}


// --- EVENTO PRINCIPAL ---
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    actualizarHeader();

    // --- LÓGICA PARA LA PÁGINA DE INICIO (index.html) ---
    if (path.endsWith('/') || path.endsWith('index.html')) {
        const canchasContainer = document.getElementById('canchas-container');
        const loginModal = document.getElementById('login-modal');
        const loginForm = document.getElementById('login-form');
        const loginError = document.getElementById('login-error');
        const closeModalBtn = document.querySelector('#login-modal .close-btn');
        const reservaModal = document.getElementById('reserva-modal');
        const reservaForm = document.getElementById('reserva-form');
        const reservaError = document.getElementById('reserva-error');
        const closeReservaModalBtn = document.querySelector('#reserva-modal .close-btn');
        const misReservasContainer = document.getElementById('mis-reservas-container');
        const pagoModal = document.getElementById('pago-modal');
        const pagoForm = document.getElementById('pago-form');
        const closePagoModalBtn = document.querySelector('#pago-modal .close-btn');

        async function cargarCanchas() {
            if (!canchasContainer) return;
            try {
                canchasContainer.innerHTML = '<p>Cargando canchas...</p>';
                const canchas = await api.get('/canchas');
                canchasContainer.innerHTML = '';
                if (canchas.length === 0) {
                    canchasContainer.innerHTML = '<p>No hay canchas disponibles.</p>';
                    return;
                }
                canchas.forEach(cancha => {
                    const canchaCard = document.createElement('div');
                    canchaCard.className = 'cancha-card';
                    
                    // --- CORRECCIÓN CLAVE: HTML de la tarjeta actualizado ---
                    canchaCard.innerHTML = `
                        <div class="card-image">
                            <img src="https://placehold.co/600x400/2D3748/F7FAFC?text=${encodeURIComponent(cancha.nombre)}" alt="Imagen de ${cancha.nombre}">
                        </div>
                        <div class="card-content">
                            <h3>${cancha.nombre}</h3>
                            <p>${cancha.descripcion}</p>
                            <div class="card-footer">
                                <span class="price">$${cancha.tarifa_por_hora}/hr</span>
                                <button class="reservar-btn" data-id="${cancha.id_cancha}" data-tarifa="${cancha.tarifa_por_hora}">Reservar</button>
                            </div>
                        </div>
                    `;
                    canchasContainer.appendChild(canchaCard);
                });
            } catch (error) {
                canchasContainer.innerHTML = `<p>Error al cargar las canchas.</p>`;
            }
        }

        async function cargarMisReservas() {
            if (!auth.isAuthenticated()) return;
            try {
                const reservas = await api.get('/reservas/mis-reservas', true);
                misReservasContainer.innerHTML = '';
                if(reservas.length === 0) {
                    misReservasContainer.innerHTML = '<p>No tienes reservas activas o pendientes.</p>';
                    return;
                }
                const canchas = await api.get('/canchas');
                reservas.forEach(reserva => {
                    const cancha = canchas.find(c => c.id_cancha === reserva.id_cancha);
                    const card = document.createElement('div');
                    card.className = 'reserva-card';
                    card.innerHTML = `
                        <div>
                            <h4>Cancha: ${cancha ? cancha.nombre : 'Desconocida'}</h4>
                            <p>Fecha: ${new Date(reserva.fecha_hora_inicio).toLocaleString()}</p>
                            <p>Estado: <strong>${reserva.estado.replace(/_/g, ' ')}</strong></p>
                        </div>
                        ${reserva.estado === 'Pendiente_de_Pago' ? 
                        `<button class="pagar-btn" data-reserva-id="${reserva.id_reserva}" data-monto="${reserva.monto_total}" data-cancha-nombre="${cancha ? cancha.nombre : ''}">Pagar</button>` : ''}
                    `;
                    misReservasContainer.appendChild(card);
                });
            } catch (error) {
                misReservasContainer.innerHTML = '<p>Error al cargar tus reservas.</p>';
            }
        }

        function openPagoModal({ reservaId, monto, canchaNombre }) {
            document.getElementById('pago-reserva-id').value = reservaId;
            document.getElementById('pago-cancha-nombre').textContent = canchaNombre;
            document.getElementById('pago-monto').textContent = `$${parseFloat(monto).toFixed(2)}`;
            pagoModal.style.display = 'flex';
        }
        
        function showLoginModal() { loginModal.style.display = 'flex'; }
        function hideLoginModal() { loginModal.style.display = 'none'; }
        function showReservaModal() { reservaModal.style.display = 'flex'; }
        function hideReservaModal() { reservaModal.style.display = 'none'; }
        function hidePagoModal() { pagoModal.style.display = 'none'; }
        function iniciarProcesoDeReserva() { showReservaModal(); }

        cargarCanchas();
        cargarMisReservas();

        canchasContainer?.addEventListener('click', (event) => {
            if (event.target.classList.contains('reservar-btn')) {
                localStorage.setItem('canchaIdTemporal', event.target.dataset.id);
                localStorage.setItem('canchaTarifaTemporal', event.target.dataset.tarifa);
                if (auth.isAuthenticated()) {
                    iniciarProcesoDeReserva();
                } else {
                    showLoginModal();
                }
            }
        });

        loginForm?.addEventListener('submit', async (event) => {
            event.preventDefault();
            try {
                await auth.login(event.target.email.value, event.target.password.value);
                hideLoginModal();
                actualizarHeader();
                cargarMisReservas();
            } catch (error) {
                loginError.textContent = 'Credenciales incorrectas.';
            }
        });

        reservaForm?.addEventListener('submit', async (event) => {
            event.preventDefault();
            const canchaIdString = localStorage.getItem('canchaIdTemporal');
            const fechaInicioInput = event.target['fecha-inicio'].value;
            if (!fechaInicioInput) {
                reservaError.textContent = 'Debes seleccionar una fecha y hora.';
                return;
            }
            const fechaInicio = new Date(fechaInicioInput);
            const fechaFin = new Date(fechaInicio.getTime() + 60 * 60 * 1000);
            const reservaData = {
                id_cancha: parseInt(canchaIdString, 10),
                fecha_hora_inicio: fechaInicio.toISOString(),
                fecha_hora_fin: fechaFin.toISOString()
            };
            try {
                await api.post('/reservas', reservaData, true);
                hideReservaModal();
                alert('¡Reserva creada exitosamente! Ve a "Mis Reservas" para completar el pago.');
                cargarMisReservas();
                document.getElementById('mis-reservas-btn').click();
            } catch (error) {
                reservaError.textContent = 'Horario no disponible o error al crear la reserva.';
            }
        });
        
        misReservasContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('pagar-btn')) {
                const { reservaId, monto, canchaNombre } = event.target.dataset;
                openPagoModal({ reservaId, monto, canchaNombre });
            }
        });

        pagoForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const pagoData = {
                id_reserva: parseInt(document.getElementById('pago-reserva-id').value, 10),
                monto: parseFloat(document.getElementById('pago-monto').textContent.replace('$', '')),
                metodo_pago: document.getElementById('pago_metodo').value
            };
            try {
                await api.post('/pagos', pagoData, true);
                hidePagoModal();
                alert('¡Pago realizado con éxito! Tu reserva está confirmada.');
                cargarMisReservas();
            } catch (error) {
                alert('Error al procesar el pago.');
            }
        });
        
        closeModalBtn?.addEventListener('click', hideLoginModal);
        loginModal?.addEventListener('click', (event) => { if (event.target === loginModal) hideLoginModal(); });
        closeReservaModalBtn?.addEventListener('click', hideReservaModal);
        reservaModal?.addEventListener('click', (event) => { if (event.target === reservaModal) hideReservaModal(); });
        closePagoModalBtn?.addEventListener('click', hidePagoModal);
        pagoModal?.addEventListener('click', (event) => { if (event.target === pagoModal) hidePagoModal(); });
    }
    // --- LÓGICA PARA LA PÁGINA DE REGISTRO (registro.html) ---
    else if (path.endsWith('registro.html')) {
        const registroForm = document.getElementById('registro-form');
        const registroError = document.getElementById('registro-error');
        registroForm?.addEventListener('submit', async (event) => {
            event.preventDefault();
            const data = {
                nombre: event.target.nombre.value,
                apellido: event.target.apellido.value,
                correo_electronico: event.target.correo_electronico.value,
                contraseña: event.target.contrasena.value,
                telefono: event.target.telefono.value,
            };
            try {
                await auth.register(data);
                alert('¡Registro exitoso! Serás redirigido para iniciar sesión.');
                window.location.href = 'index.html';
            } catch(error) {
                registroError.textContent = 'Error en el registro. Es posible que el correo ya esté en uso.';
            }
        });
    }
    // --- LÓGICA PARA LA PÁGINA DE ADMINISTRACIÓN (admin.html) ---
    else if (path.endsWith('admin.html')) {
        const user = auth.getUser();
        if (!user || user.rol !== 'Administrador') {
            alert('Acceso denegado. Debes ser un administrador para ver esta página.');
            window.location.href = 'index.html';
            return;
        }

        console.log(`¡Bienvenido, Administrador ${user.nombre}!`);

        let todasLasCategorias = [], todasLasCanchas = [];
        const views = document.querySelectorAll('.admin-view');
        const navButtons = document.querySelectorAll('#admin-nav button');
        const categoriasTableBody = document.getElementById('categorias-table-body');
        const crearCategoriaBtn = document.getElementById('crear-categoria-btn');
        const categoriaModal = document.getElementById('categoria-modal');
        const categoriaForm = document.getElementById('categoria-form');
        const canchasTableBody = document.getElementById('canchas-table-body');
        const crearCanchaBtn = document.getElementById('crear-cancha-btn');
        const canchaModal = document.getElementById('cancha-modal');
        const canchaForm = document.getElementById('cancha-form');
        const usuariosTableBody = document.getElementById('usuarios-table-body');
        const reporteUsoContainer = document.getElementById('reporte-uso-canchas');
        const reporteFacturacionContainer = document.getElementById('reporte-facturacion');

        function switchView(viewId) {
            views.forEach(view => {
                view.style.display = view.id === `admin-${viewId}-view` ? 'block' : 'none';
            });
            if (viewId === 'categorias') cargarAdminCategorias();
            if (viewId === 'canchas') cargarAdminCanchas();
            if (viewId === 'usuarios') cargarAdminUsuarios();
            if (viewId === 'reportes') cargarAdminReportes();
        }
        navButtons.forEach(button => {
            button.addEventListener('click', () => switchView(button.dataset.view));
        });

        async function cargarAdminCategorias() {
            try {
                todasLasCategorias = await api.get('/categorias');
                categoriasTableBody.innerHTML = '';
                todasLasCategorias.forEach(cat => {
                    const row = document.createElement('tr');
                    row.innerHTML = `<td>${cat.id_categoria}</td><td>${cat.nombre_categoria}</td><td>${cat.descripcion}</td><td><button class="action-btn edit-btn" data-id="${cat.id_categoria}" data-type="categoria">Editar</button><button class="action-btn delete-btn" data-id="${cat.id_categoria}" data-type="categoria">Eliminar</button></td>`;
                    categoriasTableBody.appendChild(row);
                });
            } catch (error) { console.error('Error al cargar categorías:', error); }
        }
        function openCategoriaModal(categoria = null) {
            categoriaForm.reset();
            document.getElementById('categoria-modal-title').textContent = categoria ? 'Editar Categoría' : 'Crear Nueva Categoría';
            if (categoria) {
                document.getElementById('categoria-id').value = categoria.id_categoria;
                document.getElementById('nombre_categoria').value = categoria.nombre_categoria;
                document.getElementById('descripcion').value = categoria.descripcion;
            } else {
                document.getElementById('categoria-id').value = '';
            }
            categoriaModal.style.display = 'flex';
        }
        crearCategoriaBtn.addEventListener('click', () => openCategoriaModal());
        categoriaForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const id = document.getElementById('categoria-id').value;
            const data = { nombre_categoria: document.getElementById('nombre_categoria').value, descripcion: document.getElementById('descripcion').value };
            try {
                if (id) { await api.put(`/categorias/${id}`, data, true); } 
                else { await api.post('/categorias', data, true); }
                categoriaModal.style.display = 'none';
                cargarAdminCategorias();
            } catch (error) { alert('No se pudo guardar la categoría.'); }
        });
        categoriasTableBody.addEventListener('click', async (event) => {
            const target = event.target;
            if (target.dataset.type !== 'categoria') return;
            const id = parseInt(target.dataset.id, 10);
            if (target.classList.contains('edit-btn')) {
                const categoriaAEditar = todasLasCategorias.find(cat => cat.id_categoria === id);
                if (categoriaAEditar) openCategoriaModal(categoriaAEditar);
            }
            if (target.classList.contains('delete-btn')) {
                if (confirm(`¿Seguro que quieres eliminar la categoría ID ${id}?`)) {
                    try {
                        await api.delete(`/categorias/${id}`, true);
                        cargarAdminCategorias();
                    } catch (error) { alert('No se pudo eliminar la categoría.'); }
                }
            }
        });
        categoriaModal.querySelector('.close-btn').addEventListener('click', () => categoriaModal.style.display = 'none');

        async function cargarAdminCanchas() {
            try {
                [todasLasCanchas, todasLasCategorias] = await Promise.all([api.get('/canchas'), api.get('/categorias')]);
                canchasTableBody.innerHTML = '';
                todasLasCanchas.forEach(cancha => {
                    const categoria = todasLasCategorias.find(cat => cat.id_categoria === cancha.id_categoria);
                    const row = document.createElement('tr');
                    row.innerHTML = `<td>${cancha.id_cancha}</td><td>${cancha.nombre}</td><td>${categoria ? categoria.nombre_categoria : 'N/A'}</td><td>${cancha.tarifa_por_hora}</td><td>${cancha.estado}</td><td><button class="action-btn edit-btn" data-id="${cancha.id_cancha}" data-type="cancha">Editar</button><button class="action-btn delete-btn" data-id="${cancha.id_cancha}" data-type="cancha">Eliminar</button></td>`;
                    canchasTableBody.appendChild(row);
                });
            } catch (error) { console.error('Error al cargar canchas:', error); }
        }
        async function openCanchaModal(cancha = null) {
            canchaForm.reset();
            const selectCategoria = document.getElementById('cancha_categoria');
            selectCategoria.innerHTML = '<option value="">Cargando...</option>';
            if (todasLasCategorias.length === 0) todasLasCategorias = await api.get('/categorias');
            selectCategoria.innerHTML = todasLasCategorias.map(cat => `<option value="${cat.id_categoria}">${cat.nombre_categoria}</option>`).join('');
            document.getElementById('cancha-modal-title').textContent = cancha ? 'Editar Cancha' : 'Crear Nueva Cancha';
            if (cancha) {
                document.getElementById('cancha-id').value = cancha.id_cancha;
                document.getElementById('cancha_nombre').value = cancha.nombre;
                selectCategoria.value = cancha.id_categoria;
                document.getElementById('cancha_descripcion').value = cancha.descripcion;
                document.getElementById('cancha_tarifa').value = cancha.tarifa_por_hora;
                document.getElementById('cancha_estado').value = cancha.estado;
            }
            canchaModal.style.display = 'flex';
        }
        crearCanchaBtn.addEventListener('click', () => openCanchaModal());
        canchaForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const id = document.getElementById('cancha-id').value;
            const data = {
                id_categoria: parseInt(document.getElementById('cancha_categoria').value, 10),
                nombre: document.getElementById('cancha_nombre').value,
                descripcion: document.getElementById('cancha_descripcion').value,
                tarifa_por_hora: parseFloat(document.getElementById('cancha_tarifa').value),
                estado: document.getElementById('cancha_estado').value,
            };
            try {
                if (id) { await api.put(`/canchas/${id}`, data, true); }
                else { await api.post('/canchas', data, true); }
                canchaModal.style.display = 'none';
                cargarAdminCanchas();
            } catch (error) { alert('No se pudo guardar la cancha.'); }
        });
        canchasTableBody.addEventListener('click', async (event) => {
            const target = event.target;
            if (target.dataset.type !== 'cancha') return;
            const id = parseInt(target.dataset.id, 10);
            if (target.classList.contains('edit-btn')) {
                const canchaAEditar = todasLasCanchas.find(c => c.id_cancha === id);
                if (canchaAEditar) openCanchaModal(canchaAEditar);
            }
            if (target.classList.contains('delete-btn')) {
                if (confirm(`¿Seguro que quieres eliminar la cancha ID ${id}?`)) {
                    try {
                        await api.delete(`/canchas/${id}`, true);
                        cargarAdminCanchas();
                    } catch (error) { alert('No se pudo eliminar la cancha.'); }
                }
            }
        });
        canchaModal.querySelector('.close-btn').addEventListener('click', () => canchaModal.style.display = 'none');

        async function cargarAdminUsuarios() {
            try {
                const usuarios = await api.get('/users', true);
                usuariosTableBody.innerHTML = '';
                usuarios.forEach(usr => {
                    const row = document.createElement('tr');
                    row.innerHTML = `<td>${usr.id_usuario}</td><td>${usr.nombre}</td><td>${usr.apellido}</td><td>${usr.correo_electronico}</td><td>${usr.telefono}</td><td>${usr.rol}</td>`;
                    usuariosTableBody.appendChild(row);
                });
            } catch (error) {
                console.error('Error al cargar usuarios:', error);
                usuariosTableBody.innerHTML = '<tr><td colspan="6">Error al cargar datos de usuarios.</td></tr>';
            }
        }
        
        async function cargarAdminReportes() {
            reporteUsoContainer.innerHTML = '<p>Cargando reporte...</p>';
            reporteFacturacionContainer.innerHTML = '<p>Cargando reporte...</p>';
            try {
                const [reporteUso, reporteFacturacion] = await Promise.all([
                    api.get('/reportes/uso-canchas', true),
                    api.get('/reportes/facturacion', true)
                ]);

                if (reporteUso.length > 0) {
                    reporteUsoContainer.innerHTML = '<ul>' + reporteUso.map(item =>
                        `<li><strong>${item.nombre_cancha}:</strong> ${item.numero_de_reservas} reservas</li>`
                    ).join('') + '</ul>';
                } else {
                    reporteUsoContainer.innerHTML = '<p>No hay datos de uso de canchas para mostrar.</p>';
                }

                const facturacionTotal = reporteFacturacion[0]?.ingresos_totales || 0;
                reporteFacturacionContainer.innerHTML = `<strong>Ingresos Totales:</strong> $${parseFloat(facturacionTotal).toFixed(2)}`;

            } catch (error) {
                console.error('Error al cargar reportes:', error);
                reporteUsoContainer.innerHTML = '<p>Error al cargar el reporte.</p>';
                reporteFacturacionContainer.innerHTML = '<p>Error al cargar el reporte.</p>';
            }
        }

        switchView('categorias');
    }
});