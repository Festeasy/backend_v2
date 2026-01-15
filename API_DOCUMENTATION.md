# Documentación API Backend Express

## Información General

- **Framework**: Express.js
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: JWT
- **Puerto**: 3000 (por defecto)
- **URL Base**: `http://localhost:3000`

## Middlewares

### Globales
- **CORS**: Habilitado para todas las rutas
- **express.json()**: Parseo de JSON en solicitudes
- **Manejo de errores**: Captura errores 500 y 404

### Autenticación
- **authMiddleware**: Requiere token JWT válido
- **validateRequiredFields**: Valida campos obligatorios

## Estructura de Datos

### Modelos Principales

#### 1. Users (users)
```javascript
{
  id: 'uuid',
  correo_electronico: 'string',
  contrasena: 'string', // encriptada
  rol: 'string', // 'client', 'provider', 'admin'
  estado: 'string', // 'active', 'blocked'
  creado_en: 'timestamp',
  actualizado_en: 'timestamp'
}
```

#### 2. Perfil Cliente (perfil_cliente)
```javascript
{
  id: 'uuid',
  usuario_id: 'uuid',
  nombre_completo: 'string',
  telefono: 'string',
  avatar_url: 'string',
  creado_en: 'timestamp'
}
```

#### 3. Perfil Proveedor (perfil_proveedor)
```javascript
{
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
}
```

#### 4. Carrito (carrito)
```javascript
{
  id: 'uuid',
  cliente_usuario_id: 'uuid',
  fecha_servicio_deseada: 'date',
  direccion_servicio: 'string',
  latitud_servicio: 'number',
  longitud_servicio: 'number',
  estado: 'string', // 'activo', 'abandonado', 'convertido'
  creado_en: 'timestamp',
  actualizado_en: 'timestamp'
}
```

#### 5. Items Carrito (items_carrito)
```javascript
{
  id: 'uuid',
  carrito_id: 'uuid',
  paquete_id: 'uuid',
  cantidad: 'number',
  precio_unitario_momento: 'number',
  creado_en: 'timestamp'
}
```

#### 6. Solicitud (solicitudes)
```javascript
{
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
}
```

#### 7. Cotización (cotizaciones)
```javascript
{
  id: 'uuid',
  solicitud_id: 'uuid',
  proveedor_usuario_id: 'uuid',
  precio_total_propuesto: 'number',
  desglose_json: 'object',
  notas: 'string',
  estado: 'string', // 'pendiente', 'aceptada_cliente', 'rechazada_cliente'
  creado_en: 'timestamp'
}
```

#### 8. Pago (pagos)
```javascript
{
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
}
```

#### 9. Paquete Proveedor (paquetes_proveedor)
```javascript
{
  id: 'uuid',
  proveedor_usuario_id: 'uuid',
  categoria_servicio_id: 'uuid',
  nombre: 'string',
  descripcion: 'string',
  precio_base: 'number',
  estado: 'string', // 'borrador', 'publicado', 'archivado'
  creado_en: 'timestamp',
  actualizado_en: 'timestamp'
}
```

## Endpoints API

### 1. Autenticación (/users)

#### POST /users/register
- **Descripción**: Registro de nuevos usuarios
- **Pública**: No requiere autenticación
- **Campos requeridos**: `correo_electronico`, `contrasena`, `rol`
- **Body**:
```javascript
{
  correo_electronico: "user@example.com",
  contrasena: "password123",
  rol: "client" // o "provider"
}
```

#### POST /users/login
- **Descripción**: Inicio de sesión
- **Pública**: No requiere autenticación
- **Campos requeridos**: `correo_electronico`, `contrasena`
- **Body**:
```javascript
{
  correo_electronico: "user@example.com",
  contrasena: "password123"
}
```

#### GET /users/
- **Descripción**: Obtener todos los usuarios
- **Protegida**: Requiere token JWT

#### GET /users/:id
- **Descripción**: Obtener usuario por ID
- **Protegida**: Requiere token JWT

#### PUT /users/:id
- **Descripción**: Actualizar usuario
- **Protegida**: Requiere token JWT

#### DELETE /users/:id
- **Descripción**: Eliminar usuario
- **Protegida**: Requiere token JWT

### 2. Perfil Cliente (/perfil-cliente)

#### POST /perfil-cliente/
- **Descripción**: Crear perfil de cliente
- **Protegida**: Requiere token JWT
- **Campos requeridos**: `usuario_id`, `nombre_completo`
- **Body**:
```javascript
{
  usuario_id: "uuid",
  nombre_completo: "Juan Pérez",
  telefono: "5551234567",
  avatar_url: "https://example.com/avatar.jpg"
}
```

#### GET /perfil-cliente/
- **Descripción**: Obtener todos los perfiles de cliente
- **Protegida**: Requiere token JWT

#### GET /perfil-cliente/:id
- **Descripción**: Obtener perfil de cliente por ID
- **Protegida**: Requiere token JWT

#### PUT /perfil-cliente/:id
- **Descripción**: Actualizar perfil de cliente
- **Protegida**: Requiere token JWT

#### DELETE /perfil-cliente/:id
- **Descripción**: Eliminar perfil de cliente
- **Protegida**: Requiere token JWT

### 3. Perfil Proveedor (/perfil-proveedor)

#### POST /perfil-proveedor/
- **Descripción**: Crear perfil de proveedor
- **Protegida**: Requiere token JWT
- **Campos requeridos**: `usuario_id`, `nombre_negocio`
- **Body**:
```javascript
{
  usuario_id: "uuid",
  nombre_negocio: "Mi Negocio",
  descripcion: "Descripción del negocio",
  telefono: "5551234567",
  avatar_url: "https://example.com/avatar.jpg",
  direccion_formato: "Calle Principal #123",
  latitud: 19.4326,
  longitud: -99.1332,
  radio_cobertura_km: 50,
  tipo_suscripcion_actual: "basico",
  categoria_principal_id: "uuid"
}
```

#### GET /perfil-proveedor/
- **Descripción**: Obtener todos los perfiles de proveedor
- **Protegida**: Requiere token JWT

#### GET /perfil-proveedor/:id
- **Descripción**: Obtener perfil de proveedor por ID
- **Protegida**: Requiere token JWT

#### PUT /perfil-proveedor/:id
- **Descripción**: Actualizar perfil de proveedor
- **Protegida**: Requiere token JWT

#### DELETE /perfil-proveedor/:id
- **Descripción**: Eliminar perfil de proveedor
- **Protegida**: Requiere token JWT

### 4. Carrito (/carrito)

#### POST /carrito/
- **Descripción**: Crear nuevo carrito
- **Protegida**: Requiere token JWT
- **Campos requeridos**: `cliente_usuario_id`
- **Body**:
```javascript
{
  cliente_usuario_id: "uuid",
  fecha_servicio_deseada: "2024-12-31",
  direccion_servicio: "Calle Principal #123",
  latitud_servicio: 19.4326,
  longitud_servicio: -99.1332
}
```

#### GET /carrito/
- **Descripción**: Obtener todos los carritos
- **Protegida**: Requiere token JWT

#### GET /carrito/:id
- **Descripción**: Obtener carrito por ID
- **Protegida**: Requiere token JWT

#### PUT /carrito/:id
- **Descripción**: Actualizar carrito
- **Protegida**: Requiere token JWT

#### DELETE /carrito/:id
- **Descripción**: Eliminar carrito
- **Protegida**: Requiere token JWT

### 5. Items Carrito (/items-carrito)

#### POST /items-carrito/
- **Descripción**: Agregar item al carrito
- **Protegida**: Requiere token JWT
- **Campos requeridos**: `carrito_id`, `paquete_id`, `cantidad`, `precio_unitario_momento`
- **Body**:
```javascript
{
  carrito_id: "uuid",
  paquete_id: "uuid",
  cantidad: 2,
  precio_unitario_momento: 150.00
}
```

#### GET /items-carrito/
- **Descripción**: Obtener todos los items del carrito
- **Protegida**: Requiere token JWT

#### GET /items-carrito/:id
- **Descripción**: Obtener item del carrito por ID
- **Protegida**: Requiere token JWT

#### PUT /items-carrito/:id
- **Descripción**: Actualizar item del carrito
- **Protegida**: Requiere token JWT

#### DELETE /items-carrito/:id
- **Descripción**: Eliminar item del carrito
- **Protegida**: Requiere token JWT

### 6. Solicitudes (/solicitudes)

#### POST /solicitudes/
- **Descripción**: Crear nueva solicitud
- **Protegida**: Requiere token JWT
- **Campos requeridos**: `cliente_usuario_id`, `proveedor_usuario_id`, `fecha_servicio`, `direccion_servicio`
- **Body**:
```javascript
{
  cliente_usuario_id: "uuid",
  proveedor_usuario_id: "uuid",
  fecha_servicio: "2024-12-31",
  direccion_servicio: "Calle Principal #123",
  latitud_servicio: 19.4326,
  longitud_servicio: -99.1332,
  titulo_evento: "Boda de María y José"
}
```

#### GET /solicitudes/
- **Descripción**: Obtener todas las solicitudes
- **Protegida**: Requiere token JWT

#### GET /solicitudes/:id
- **Descripción**: Obtener solicitud por ID
- **Protegida**: Requiere token JWT

#### PUT /solicitudes/:id
- **Descripción**: Actualizar solicitud
- **Protegida**: Requiere token JWT

#### DELETE /solicitudes/:id
- **Descripción**: Eliminar solicitud
- **Protegida**: Requiere token JWT

### 7. Cotizaciones (/cotizaciones)

#### POST /cotizaciones/
- **Descripción**: Crear nueva cotización
- **Protegida**: Requiere token JWT
- **Campos requeridos**: `solicitud_id`, `proveedor_usuario_id`, `precio_total_propuesto`
- **Body**:
```javascript
{
  solicitud_id: "uuid",
  proveedor_usuario_id: "uuid",
  precio_total_propuesto: 1500.00,
  desglose_json: {
    "servicio_principal": 1000.00,
    "adicional1": 300.00,
    "adicional2": 200.00
  },
  notas: "Incluye transporte y setup"
}
```

#### GET /cotizaciones/
- **Descripción**: Obtener todas las cotizaciones
- **Protegida**: Requiere token JWT

#### GET /cotizaciones/:id
- **Descripción**: Obtener cotización por ID
- **Protegida**: Requiere token JWT

#### PUT /cotizaciones/:id
- **Descripción**: Actualizar cotización
- **Protegida**: Requiere token JWT

#### DELETE /cotizaciones/:id
- **Descripción**: Eliminar cotización
- **Protegida**: Requiere token JWT

### 8. Pagos (/pagos)

#### POST /pagos/
- **Descripción**: Crear nuevo pago
- **Protegida**: Requiere token JWT
- **Campos requeridos**: `cotizacion_id`, `cliente_usuario_id`, `proveedor_usuario_id`, `monto`, `metodo_pago`
- **Body**:
```javascript
{
  cotizacion_id: "uuid",
  cliente_usuario_id: "uuid",
  proveedor_usuario_id: "uuid",
  monto: 1500.00,
  metodo_pago: "transferencia",
  comprobante_url: "https://example.com/comprobante.jpg"
}
```

#### GET /pagos/
- **Descripción**: Obtener todos los pagos
- **Protegida**: Requiere token JWT

#### GET /pagos/:id
- **Descripción**: Obtener pago por ID
- **Protegida**: Requiere token JWT

#### PUT /pagos/:id
- **Descripción**: Actualizar pago
- **Protegida**: Requiere token JWT

#### DELETE /pagos/:id
- **Descripción**: Eliminar pago
- **Protegida**: Requiere token JWT

### 9. Paquetes Proveedor (/paquetes-proveedor)

#### POST /paquetes-proveedor/
- **Descripción**: Crear nuevo paquete de proveedor
- **Protegida**: Requiere token JWT
- **Campos requeridos**: `proveedor_usuario_id`, `categoria_servicio_id`, `nombre`, `precio_base`
- **Body**:
```javascript
{
  proveedor_usuario_id: "uuid",
  categoria_servicio_id: "uuid",
  nombre: "Paquete Boda Premium",
  descripcion: "Servicio completo para bodas",
  precio_base: 2000.00
}
```

#### GET /paquetes-proveedor/
- **Descripción**: Obtener todos los paquetes de proveedor
- **Pública**: No requiere autenticación

#### GET /paquetes-proveedor/:id
- **Descripción**: Obtener paquete de proveedor por ID
- **Pública**: No requiere autenticación

#### PUT /paquetes-proveedor/:id
- **Descripción**: Actualizar paquete de proveedor
- **Protegida**: Requiere token JWT

#### DELETE /paquetes-proveedor/:id
- **Descripción**: Eliminar paquete de proveedor
- **Protegida**: Requiere token JWT

## Flujo de Datos General

### 1. Registro y Autenticación
1. Cliente/Proveedor se registra en `/users/register`
2. Sistema crea usuario en tabla `users`
3. Usuario inicia sesión en `/users/login`
4. Sistema retorna token JWT

### 2. Creación de Perfil
1. Con token JWT, usuario crea perfil:
   - Cliente: `/perfil-cliente/`
   - Proveedor: `/perfil-proveedor/`

### 3. Flujo de Compra (Cliente)
1. Cliente crea carrito: `/carrito/`
2. Agrega paquetes al carrito: `/items-carrito/`
3. Convierte carrito en solicitud: `/solicitudes/`
4. Espera cotizaciones de proveedores

### 4. Flujo de Cotización (Proveedor)
1. Proveedor recibe notificación de solicitud
2. Crea cotización: `/cotizaciones/`
3. Cliente revisa y acepta/rechaza cotización

### 5. Flujo de Pago
1. Una vez aceptada la cotización, cliente crea pago: `/pagos/`
2. Sube comprobante de pago
3. Proveedor revisa y aprueba/rechaza pago

## Estados del Sistema

### Estados de Solicitud
- `pendiente_aprobacion`: Esperando aprobación del proveedor
- `negociacion`: En negociación entre cliente y proveedor
- `aceptada`: Solicitud aceptada por ambas partes
- `rechazada`: Solicitud rechazada
- `completada`: Servicio completado
- `cancelada`: Solicitud cancelada

### Estados de Cotización
- `pendiente`: Esperando respuesta del cliente
- `aceptada_cliente`: Cotización aceptada por cliente
- `rechazada_cliente`: Cotización rechazada por cliente

### Estados de Pago
- `esperando_comprobante`: Esperando que cliente suba comprobante
- `en_revision`: Comprobante en revisión por proveedor
- `aprobado`: Pago aprobado
- `rechazado`: Pago rechazado

### Estados de Carrito
- `activo`: Carrito en uso
- `abandonado`: Carrito abandonado por tiempo
- `convertido`: Carrito convertido en solicitud

## Validaciones

### Middleware de Validación
El sistema utiliza `validateRequiredFields` para verificar campos obligatorios en cada endpoint.

### Campos Obligatorios por Endpoint
- **Registro**: `correo_electronico`, `contrasena`, `rol`
- **Login**: `correo_electronico`, `contrasena`
- **Perfil Cliente**: `usuario_id`, `nombre_completo`
- **Perfil Proveedor**: `usuario_id`, `nombre_negocio`
- **Carrito**: `cliente_usuario_id`
- **Item Carrito**: `carrito_id`, `paquete_id`, `cantidad`, `precio_unitario_momento`
- **Solicitud**: `cliente_usuario_id`, `proveedor_usuario_id`, `fecha_servicio`, `direccion_servicio`
- **Cotización**: `solicitud_id`, `proveedor_usuario_id`, `precio_total_propuesto`
- **Pago**: `cotizacion_id`, `cliente_usuario_id`, `proveedor_usuario_id`, `monto`, `metodo_pago`
- **Paquete Proveedor**: `proveedor_usuario_id`, `categoria_servicio_id`, `nombre`, `precio_base`

## Errores Comunes

### 401 No Autorizado
- Token JWT inválido o ausente
- Token expirado

### 404 No Encontrado
- Recurso no existe
- ID inválido

### 400 Bad Request
- Campos requeridos faltantes
- Formato de datos inválido

### 500 Error Interno
- Error de conexión a base de datos
- Error en el servidor

## Health Check

### GET /health
- **Descripción**: Verificar estado de la API
- **Pública**: No requiere autenticación
- **Response**:
```javascript
{
  status: 'OK',
  message: 'API funcionando correctamente'
}
```

## Notas de Implementación

1. **Autenticación**: Todas las rutas protegidas requieren token JWT en header `Authorization: Bearer <token>`
2. **Base de Datos**: Utiliza Supabase como ORM y conexión a PostgreSQL
3. **Validación**: Middleware automático de campos requeridos
4. **Errores**: Manejo centralizado de errores con códigos HTTP apropiados
5. **CORS**: Configurado para permitir solicitudes desde cualquier origen (ajustar en producción)