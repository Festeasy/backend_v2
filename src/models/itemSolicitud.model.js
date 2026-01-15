// Model: items_solicitud
// Tabla: public.items_solicitud

const tableName = 'items_solicitud';

const fields = {
    id: 'uuid',
    solicitud_id: 'uuid',
    paquete_id: 'uuid',
    nombre_paquete_snapshot: 'string',
    cantidad: 'number',
    precio_unitario: 'number'
};

const requiredFields = ['solicitud_id', 'nombre_paquete_snapshot', 'cantidad', 'precio_unitario'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
