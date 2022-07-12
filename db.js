const { Pool } = require('pg');

const db = new Pool({
    host: '',
    user: '',     
    password: '',
    database: '',
    port: 5432,
});

module.exports = db;
