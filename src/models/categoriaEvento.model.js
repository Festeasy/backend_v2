// Model: categorias_evento
// Tabla: public.categorias_evento

const tableName = 'categorias_evento';

const fields = {
    id: 'uuid',
    nombre: 'string',
    icono: 'string'
};

const requiredFields = ['nombre'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
