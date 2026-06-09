//Environment variables:
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const app = require('./app'); //App file for server configuration:
//const jwt = require('jsonwebtoken'); //JsonWebToken import:
const sequelize = require('./config/sequelize');
const http = require('http');
const server = http.createServer(app);


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');

    await sequelize.sync({ alter: true });
    console.log('Tablas sincronizadas correctamente.');

    server.listen(PORT, '0.0.0.0', async () => {
      console.log(`Servidor escuchando en http://0.0.0.0:${PORT}`);
    });

  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
})();