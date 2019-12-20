const winston = require('winston');
global.expect = require('chai').expect;

global.HOST = process.env.HOST ? process.env.HOST : 'jsonplaceholder.typicode.com';
global.PROTOCOL = process.env.PROTOCOL ? process.env.PROTOCOL : 'https';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  // defaultMeta: { service: 'user-service' },s
  transports: [
    new winston.transports.File({ filename: './reports/api.log', level: 'info' })
  ]
});

global.logger = logger;
