// Model: paquetes_proveedor
// Tabla: public.paquetes_proveedor

const tableName = 'paquetes_proveedor';

const fields = {
    id: 'uuid',
    proveedor_usuario_id: 'uuid',
    categoria_servicio_id: 'uuid',
    nombre: 'string',
    descripcion: 'string',
    precio_base: 'number',
    estado: 'string', // 'borrador', 'publicado', 'archivado'
    creado_en: 'timestamp',
    actualizado_en: 'timestamp'
};

const requiredFields = ['proveedor_usuario_id', 'categoria_servicio_id', 'nombre', 'precio_base'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
