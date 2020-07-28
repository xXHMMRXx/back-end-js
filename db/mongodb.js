const mongoose = require('mongoose');

async function connectDb({ host, port, dbName }) {
    
    const uri = `mongodb://${host}:${port}/${dbName}`;
    mongoose.connection.on('open', () => console.log(`*** Success db Connected ***\n--> ${uri}`));
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

}

module.exports = connectDb;