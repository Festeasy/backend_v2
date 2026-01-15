// Model: items_carrito
// Tabla: public.items_carrito

const tableName = 'items_carrito';

const fields = {
    id: 'uuid',
    carrito_id: 'uuid',
    paquete_id: 'uuid',
    cantidad: 'number',
    precio_unitario_momento: 'number',
    creado_en: 'timestamp'
};

const requiredFields = ['carrito_id', 'paquete_id', 'cantidad', 'precio_unitario_momento'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
