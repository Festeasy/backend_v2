// Model: resenas
// Tabla: public.resenas

const tableName = 'resenas';

const fields = {
    id: 'uuid',
    solicitud_id: 'uuid',
    autor_id: 'uuid',
    destinatario_id: 'uuid',
    calificacion: 'number', // 1-5
    comentario: 'string',
    creado_en: 'timestamp'
};

const requiredFields = ['solicitud_id', 'autor_id', 'destinatario_id', 'calificacion'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
