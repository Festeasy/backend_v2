// Model: users
// Tabla: public.users

const tableName = 'users';

const fields = {
    id: 'uuid',
    correo_electronico: 'string',
    contrasena: 'string',
    rol: 'string', // 'client', 'provider', 'admin'
    estado: 'string', // 'active', 'blocked'
    creado_en: 'timestamp',
    actualizado_en: 'timestamp'
};

const requiredFields = ['correo_electronico', 'contrasena', 'rol'];

module.exports = {
    tableName,
    fields,
    requiredFields
};
