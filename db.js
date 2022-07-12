const { Pool } = require('pg');

const db = new Pool({
    host: 'localhost',
    user: 'postgres',     
    password: '0721',
    database: 'FDB',
    port: 5432,
});

module.exports = db;