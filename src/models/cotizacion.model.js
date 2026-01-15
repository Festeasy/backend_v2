// Model: cotizaciones
// Tabla: public.cotizaciones

const tableName = 'cotizaciones';

const fields = {
    id: 'uuid',
    solicitud_id: 'uuid',
    proveedor_usuario_id: 'uuid',
    precio_total_propuesto: 'number',
    desglose_json: 'object',
    notas: 'string',
    estado: 'string', // 'pendiente', 'aceptada_cliente', 'rechazada_cliente'
    creado_en: 'timestamp'
};

const requiredFields = ['solicitud_id', 'proveedor_usuario_id', 'precio_total_propuesto'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
