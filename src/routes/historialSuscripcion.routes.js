const express = require('express');
const router = express.Router();
const controller = require('../controllers/historialSuscripcion.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { validateRequiredFields } = require('../middlewares/validation.middleware');

router.post('/', authMiddleware, validateRequiredFields(['proveedor_usuario_id', 'plan', 'monto_pagado', 'fecha_inicio', 'fecha_fin']), controller.create);
router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);
router.put('/:id', authMiddleware, controller.update);
router.delete('/:id', authMiddleware, controller.remove);

module.exports = router;
