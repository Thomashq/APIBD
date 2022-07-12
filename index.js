const express = require ('express');
const morgan = require('morgan');
const routes = require('./src/router/mainRoutes.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
 
app.use(routes);
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, ()=>{
    console.log(`O servidor está rodando na porta ${port}`);
});