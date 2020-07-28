const express = require('express');

const app = express();
const productRoutes = require('./routes/product');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false,
}));

app.use(bodyParser.json());

app.use('/public', express.static(`${__dirname}/storage/img`));// __dirname ruta absoluta del file
app.use('/v1', productRoutes);// Registrar las rutas --> /v1 --> version de la api

module.exports = app;