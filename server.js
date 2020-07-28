require('dotenv').config();

const app = require('./app');
const connectDb = require('./db/mongodb');
const { appConfig, dbConfig } = require('./config'); 

async function initApp(appConfig, dbConfig) {
    
    try {
        
       await connectDb(dbConfig); // Iniciar dataBase
       app.listen(appConfig.port, () => console.log(`\n*** Listen on port ***\n--> ${appConfig.port}\n\n*** Server up ***\n--> ${appConfig.host}:${appConfig.port}`)); // Inicializa el servidor
        
    } catch (e) {
        
        console.error(e);
        process.exit(0); // Mata el proceso de node en produccion
        
    }
    
}

initApp(appConfig, dbConfig);