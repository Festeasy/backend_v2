const express = require('express');
const router = express.Router();
const controller = require('../controllers/solicitud.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { validateRequiredFields } = require('../middlewares/validation.middleware');

// Rutas específicas (deben ir ANTES de /:id para evitar conflictos)
router.get('/client', authMiddleware, controller.getByClient);
router.get('/provider', authMiddleware, controller.getByProvider);
router.put('/:id/status', authMiddleware, controller.updateStatus);

// CRUD genérico
router.post('/', authMiddleware, validateRequiredFields(['cliente_usuario_id', 'proveedor_usuario_id', 'fecha_servicio', 'direccion_servicio']), controller.create);
router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);
router.put('/:id', authMiddleware, controller.update);
router.delete('/:id', authMiddleware, controller.remove);

module.exports = router;
