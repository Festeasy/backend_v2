const express = require('express');
const router = express.Router();
const controller = require('../controllers/resena.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { validateRequiredFields } = require('../middlewares/validation.middleware');

router.post('/', authMiddleware, validateRequiredFields(['solicitud_id', 'autor_id', 'destinatario_id', 'calificacion']), controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.put('/:id', authMiddleware, controller.update);
router.delete('/:id', authMiddleware, controller.remove);

module.exports = router;
