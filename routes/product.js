const express = require('express');
const upload = require('../lib/storage');
const { addProducts, getProducts } = require('../controllers/productsController');

const api = express.Router();

api.post('/products', upload.single('img'), addProducts);// image --> lugar de donde viene la imagen single() --> Accept a single file with the name fieldname. The single file will be stored in req.file.
api.get('/products', getProducts);

module.exports = api;