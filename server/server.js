//Environment variables:
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const app = require('./app'); //App file for server configuration:
//const jwt = require('jsonwebtoken'); //JsonWebToken import:
const sequelize = require('./config/sequelize');
const http = require('http');
const server = http.createServer(app);
const wait = (ms) => new Promise(r => setTimeout(r, ms));

const tries = 20;
(async () => {
  for (let index = 1; index <= tries; index++) {
    try {
      await sequelize.authenticate();
      console.log('Connected to database');

      await sequelize.sync({ alter: true });
      console.log('Tables synchronized');

      server.listen(PORT, '0.0.0.0', async () => {
        console.log(`Server listening in port ${PORT}`);
      });
      return;
    } catch (error) {
      console.error(`Waiting for MySQL, itry ${index} from ${tries}`);
      await wait(3000);
    }
  }

})();