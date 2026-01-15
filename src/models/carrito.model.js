// Model: carrito
// Tabla: public.carrito

const tableName = 'carrito';

const fields = {
    id: 'uuid',
    cliente_usuario_id: 'uuid',
    fecha_servicio_deseada: 'date',
    direccion_servicio: 'string',
    latitud_servicio: 'number',
    longitud_servicio: 'number',
    estado: 'string', // 'activo', 'abandonado', 'convertido'
    creado_en: 'timestamp',
    actualizado_en: 'timestamp'
};

const requiredFields = ['cliente_usuario_id'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
