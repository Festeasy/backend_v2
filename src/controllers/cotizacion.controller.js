const supabase = require('../config/supabase');
const { tableName } = require('../models/cotizacion.model');

const create = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .insert([req.body])
            .select();

        if (error) throw error;

        res.status(201).json({ message: 'Cotización creada', data: data[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('*');

        if (error) throw error;

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;

        const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        if (!data) {
            return res.status(404).json({ error: 'Cotización no encontrada' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = { ...req.body };
        delete updateData.id;
        delete updateData.creado_en;

        const { data, error } = await supabase
            .from(tableName)
            .update(updateData)
            .eq('id', id)
            .select();

        if (error) throw error;

        res.status(200).json({ message: 'Cotización actualizada', data: data[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;

        const { error } = await supabase
            .from(tableName)
            .delete()
            .eq('id', id);

        if (error) throw error;

        res.status(200).json({ message: 'Cotización eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
};
