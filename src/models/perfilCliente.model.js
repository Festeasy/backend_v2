// Model: perfil_cliente
// Tabla: public.perfil_cliente

const tableName = 'perfil_cliente';

const fields = {
    id: 'uuid',
    usuario_id: 'uuid',
    nombre_completo: 'string',
    telefono: 'string',
    avatar_url: 'string',
    creado_en: 'timestamp'
};

const requiredFields = ['usuario_id', 'nombre_completo'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
