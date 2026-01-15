// Model: items_paquete
// Tabla: public.items_paquete

const tableName = 'items_paquete';

const fields = {
    id: 'uuid',
    paquete_id: 'uuid',
    nombre_item: 'string',
    cantidad: 'number',
    unidad: 'string',
    creado_en: 'timestamp'
};

const requiredFields = ['paquete_id', 'nombre_item', 'cantidad'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
