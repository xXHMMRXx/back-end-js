const mongoose = require('mongoose');

const { appConfig } = require('../config');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: String,
    size: Number,
    unitaryPrice: Number,
    img: String,
    description: String
}, {
    timestamps: true
});

productSchema.methods.setImg = function setImg(filename){

    const { host, port } = appConfig;
    this.img = `${host}:${port}/public/${filename}`;    

}

module.exports = mongoose.model('products', productSchema);