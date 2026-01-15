const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { validateRequiredFields } = require('../middlewares/validation.middleware');

// Public routes
router.post('/register', validateRequiredFields(['correo_electronico', 'contrasena', 'rol']), userController.create);
router.post('/login', validateRequiredFields(['correo_electronico', 'contrasena']), userController.login);

// Protected routes
router.get('/', authMiddleware, userController.getAll);
router.get('/:id', authMiddleware, userController.getById);
router.put('/:id', authMiddleware, userController.update);
router.delete('/:id', authMiddleware, userController.remove);

module.exports = router;
