const Product = require('../models/Product');

async function addProducts(req, res){

    try {

        const {
            name,
            size,
            unitaryPrice,
            imgUrl,
            description
        } = req.body;

        
        const product = Product({
            name,
            size,
            unitaryPrice,
            imgUrl,
            description
        });
        
        if(req.file){

            const { filename } = req.file;
            product.setImg(filename);

        }

        const productStored = await product.save();

        res.status(201).send({ 
            productStored 
        });
        
    } catch (e) {
        
        res.status(500).send({
            message: e.message
        });

    }

}

async function getProducts(req, res){

    const products = await Product.find().lean().exec();// find --> Consulta en mdb, lean --> convierte la consulta en objs de js y exec --> ejecutar la consulta
    res.status(200).send({ products });

}

module.exports = {
    addProducts,
    getProducts
}