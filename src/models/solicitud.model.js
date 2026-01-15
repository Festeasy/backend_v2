// Model: solicitudes
// Tabla: public.solicitudes

const tableName = 'solicitudes';

const fields = {
    id: 'uuid',
    numero_solicitud: 'number',
    cliente_usuario_id: 'uuid',
    proveedor_usuario_id: 'uuid',
    fecha_servicio: 'date',
    direccion_servicio: 'string',
    latitud_servicio: 'number',
    longitud_servicio: 'number',
    titulo_evento: 'string',
    estado: 'string', // 'pendiente_aprobacion', 'negociacion', 'aceptada', 'rechazada', 'completada', 'cancelada'
    creado_en: 'timestamp',
    actualizado_en: 'timestamp'
};

const requiredFields = ['cliente_usuario_id', 'proveedor_usuario_id', 'fecha_servicio', 'direccion_servicio'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
