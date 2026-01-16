const supabase = require('../config/supabase');
const { tableName } = require('../models/user.model');
const { generateToken } = require('../utils/jwt');
const crypto = require('crypto');

// Create - Register user
const create = async (req, res) => {
    try {
        const { correo_electronico, contrasena, rol } = req.body;

        // Generar UUID para el nuevo usuario
        const id = crypto.randomUUID();

        const { data, error } = await supabase
            .from(tableName)
            .insert([{ id, correo_electronico, contrasena, rol }])
            .select();

        if (error) throw error;

        res.status(201).json({ message: 'Usuario creado exitosamente', data: data[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login - Authenticate user
const login = async (req, res) => {
    try {
        const { correo_electronico, contrasena } = req.body;

        const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .eq('correo_electronico', correo_electronico)
            .eq('contrasena', contrasena)
            .single();

        if (error || !data) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        if (data.estado === 'blocked') {
            return res.status(403).json({ error: 'Usuario bloqueado' });
        }

        const token = generateToken(data);

        res.status(200).json({ message: 'Login exitoso', token, user: { id: data.id, correo_electronico: data.correo_electronico, rol: data.rol } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all users
const getAll = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('id, correo_electronico, rol, estado, creado_en, actualizado_en');

        if (error) throw error;

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by ID
const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from(tableName)
            .select('id, correo_electronico, rol, estado, creado_en, actualizado_en')
            .eq('id', id)
            .single();

        if (error) throw error;

        if (!data) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body, actualizado_en: new Date().toISOString() };
        delete updateData.id;
        delete updateData.creado_en;

        const { data, error } = await supabase
            .from(tableName)
            .update(updateData)
            .eq('id', id)
            .select();

        if (error) throw error;

        res.status(200).json({ message: 'Usuario actualizado', data: data[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete user
const remove = async (req, res) => {
    try {
        const { id } = req.params;

        const { error } = await supabase
            .from(tableName)
            .delete()
            .eq('id', id);

        if (error) throw error;

        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    create,
    login,
    getAll,
    getById,
    update,
    remove
};
