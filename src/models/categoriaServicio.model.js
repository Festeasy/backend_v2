// Model: categorias_servicio
// Tabla: public.categorias_servicio

const tableName = 'categorias_servicio';

const fields = {
    id: 'uuid',
    nombre: 'string',
    descripcion: 'string',
    icono: 'string',
    activa: 'boolean'
};

const requiredFields = ['nombre'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
