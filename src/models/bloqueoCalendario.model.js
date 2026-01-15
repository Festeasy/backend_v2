// Model: bloqueos_calendario
// Tabla: public.bloqueos_calendario

const tableName = 'bloqueos_calendario';

const fields = {
    id: 'uuid',
    proveedor_usuario_id: 'uuid',
    fecha_bloqueada: 'date',
    motivo: 'string',
    creado_en: 'timestamp'
};

const requiredFields = ['proveedor_usuario_id', 'fecha_bloqueada'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
