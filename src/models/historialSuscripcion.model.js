// Model: historial_suscripciones
// Tabla: public.historial_suscripciones

const tableName = 'historial_suscripciones';

const fields = {
    id: 'uuid',
    proveedor_usuario_id: 'uuid',
    plan: 'string', // 'basico', 'plus'
    monto_pagado: 'number',
    fecha_inicio: 'timestamp',
    fecha_fin: 'timestamp',
    estado_pago: 'string', // 'pagado', 'pendiente', 'fallido'
    metodo_pago: 'string',
    referencia_transaccion: 'string',
    creado_en: 'timestamp'
};

const requiredFields = ['proveedor_usuario_id', 'plan', 'monto_pagado', 'fecha_inicio', 'fecha_fin'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
