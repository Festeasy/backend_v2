require('dotenv').config();

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    console.log(`📊 Health check: http://localhost:${port}/health`);
});