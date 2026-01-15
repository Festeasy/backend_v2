const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/user.routes');
const perfilClienteRoutes = require('./routes/perfilCliente.routes');
const perfilProveedorRoutes = require('./routes/perfilProveedor.routes');
const categoriaServicioRoutes = require('./routes/categoriaServicio.routes');
const categoriaEventoRoutes = require('./routes/categoriaEvento.routes');
const paqueteProveedorRoutes = require('./routes/paqueteProveedor.routes');
const itemPaqueteRoutes = require('./routes/itemPaquete.routes');
const carritoRoutes = require('./routes/carrito.routes');
const itemCarritoRoutes = require('./routes/itemCarrito.routes');
const solicitudRoutes = require('./routes/solicitud.routes');
const itemSolicitudRoutes = require('./routes/itemSolicitud.routes');
const cotizacionRoutes = require('./routes/cotizacion.routes');
const pagoRoutes = require('./routes/pago.routes');
const resenaRoutes = require('./routes/resena.routes');
const bloqueoCalendarioRoutes = require('./routes/bloqueoCalendario.routes');
const historialSuscripcionRoutes = require('./routes/historialSuscripcion.routes');

// Register routes
app.use('/users', userRoutes);
app.use('/perfil-cliente', perfilClienteRoutes);
app.use('/perfil-proveedor', perfilProveedorRoutes);
app.use('/categorias-servicio', categoriaServicioRoutes);
app.use('/categorias-evento', categoriaEventoRoutes);
app.use('/paquetes-proveedor', paqueteProveedorRoutes);
app.use('/items-paquete', itemPaqueteRoutes);
app.use('/carrito', carritoRoutes);
app.use('/items-carrito', itemCarritoRoutes);
app.use('/solicitudes', solicitudRoutes);
app.use('/items-solicitud', itemSolicitudRoutes);
app.use('/cotizaciones', cotizacionRoutes);
app.use('/pagos', pagoRoutes);
app.use('/resenas', resenaRoutes);
app.use('/bloqueos-calendario', bloqueoCalendarioRoutes);
app.use('/historial-suscripciones', historialSuscripcionRoutes);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'API funcionando correctamente' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;
