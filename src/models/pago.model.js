// Model: pagos
// Tabla: public.pagos

const tableName = 'pagos';

const fields = {
    id: 'uuid',
    cotizacion_id: 'uuid',
    cliente_usuario_id: 'uuid',
    proveedor_usuario_id: 'uuid',
    monto: 'number',
    metodo_pago: 'string', // 'transferencia', 'efectivo', 'deposito_oxxo'
    comprobante_url: 'string',
    estado: 'string', // 'esperando_comprobante', 'en_revision', 'aprobado', 'rechazado'
    motivo_rechazo: 'string',
    creado_en: 'timestamp',
    actualizado_en: 'timestamp'
};

const requiredFields = ['cotizacion_id', 'cliente_usuario_id', 'proveedor_usuario_id', 'monto', 'metodo_pago'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
