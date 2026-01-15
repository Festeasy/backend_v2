const express = require('express');
const router = express.Router();
const controller = require('../controllers/paqueteProveedor.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { validateRequiredFields } = require('../middlewares/validation.middleware');

router.post('/', authMiddleware, validateRequiredFields(['proveedor_usuario_id', 'categoria_servicio_id', 'nombre', 'precio_base']), controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', authMiddleware, controller.update);
router.delete('/:id', authMiddleware, controller.remove);

module.exports = router;
