PROMPT PARA ANTIGRAVITY
Contexto y Rol

Actúa como un Backend Developer Senior experto en Node.js + Express + PostgreSQL (Supabase).
Tu tarea es generar únicamente la base técnica del backend, siguiendo exactamente las instrucciones, sin agregar funcionalidades extra.

Consulta / Tarea

A partir de la base de datos que te proporcionaré, debes generar:

Models

Controllers

Rutas

Configuración de Supabase

Implementación de autenticación con JWT

Middlewares básicos de validación y autenticación

Especificaciones Técnicas (OBLIGATORIAS)
📌 1. Models

Genera UN model POR CADA TABLA de la base de datos.

Cada model debe:

Representar exactamente los campos de la tabla.

Usar nombres claros y consistentes.

Incluir los tipos de datos correctos.

NO inventes campos.

NO agregues relaciones que no existan en la BD.

📌 2. Controllers

Genera UN controller POR CADA model (SIN EXCEPCIÓN).

Cada controller debe incluir únicamente:

create

getAll

getById

update

delete

Los controllers deben:

Usar Supabase para consultas (select, insert, update, delete)

Manejar errores básicos con try/catch

NO combines varios models en un solo controller.

📌 3. Rutas

Genera UN archivo de rutas POR CADA controller.

Las rutas deben:

Apuntar directamente a su controller correspondiente.

Usar prefijos REST claros (/users, /perfil_cliente, etc.).

NO crees rutas adicionales.

NO generes versionado (/v1, /v2).

📌 4. Supabase

Genera:

Archivo de configuración (supabaseClient.js o similar).

Uso de variables de entorno:

SUPABASE_URL

SUPABASE_ANON_KEY

Usa @supabase/supabase-js.

NO mezcles Supabase con otros ORMs (Prisma, Sequelize, etc.).

📌 5. Autenticación con JWT

Implementa JWT con:

jsonwebtoken

Incluye:

Generación de token al iniciar sesión.

Verificación de token.

El token debe:

Incluir el user_id y rol.

Usar JWT_SECRET desde variables de entorno.

NO implementes refresh tokens.

NO agregues OAuth ni proveedores externos.

📌 6. Middlewares

Genera solo estos middlewares:

authMiddleware → valida JWT

roleMiddleware (opcional) → valida rol si la ruta lo requiere

Validaciones básicas:

Campos obligatorios

Tipos de datos simples

⚠️ NO uses librerías como Joi, Zod o Yup.

Restricciones IMPORTANTES

❌ No generar:

Frontend

Tests

Seeds

Documentación

Swagger

Docker

Cron jobs

WebSockets

Lógica de negocio avanzada

✔️ Genera solo lo solicitado.

Estructura Esperada del Proyecto
src/
 ├── config/
 │   └── supabase.js
 ├── models/
 ├── controllers/
 ├── routes/
 ├── middlewares/
 │   ├── auth.middleware.js
 │   └── validation.middleware.js
 ├── utils/
 │   └── jwt.js
 └── app.js

Criterios de Calidad

Un model = una tabla

Un controller = un model

Código claro y limpio

Sin duplicaciones

Sin lógica innecesaria

100% alineado a la base de datos proporcionada

Verificación Final (OBLIGATORIA)

Antes de finalizar, valida que:

✅ No falte ningún model

✅ Cada model tenga su controller

✅ Cada controller tenga su archivo de rutas

✅ JWT esté implementado

✅ Supabase esté configurado

❌ No exista código fuera de lo solicitado

apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdobG9zZ25vcGRtcm93aXlneGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0NDc5MTYsImV4cCI6MjA4NDAyMzkxNn0.QBuV39Q41gCxU4mpr_WTMPsWZXRjEHglyQPm6R8WjV8"
url = "https://ghlosgnopdmrowiygxdm.supabase.co"