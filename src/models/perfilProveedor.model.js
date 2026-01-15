// Model: perfil_proveedor
// Tabla: public.perfil_proveedor

const tableName = 'perfil_proveedor';

const fields = {
    id: 'uuid',
    usuario_id: 'uuid',
    nombre_negocio: 'string',
    descripcion: 'string',
    telefono: 'string',
    avatar_url: 'string',
    direccion_formato: 'string',
    latitud: 'number',
    longitud: 'number',
    radio_cobertura_km: 'number',
    tipo_suscripcion_actual: 'string', // 'basico', 'plus'
    categoria_principal_id: 'uuid',
    creado_en: 'timestamp',
    actualizado_en: 'timestamp'
};

const requiredFields = ['usuario_id', 'nombre_negocio'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
