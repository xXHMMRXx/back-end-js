const multer = require('multer');

// Funcion de multer para guardar archivos --> doc oficial
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage/img')
    },
    filename: function (req, file, cb) {
      //cb(null, file.fieldname + '-' + Date.now()) // Su equivalente -->
      cb(null, `${file.fieldname}-${Date.now()}.png`)
    }
  });
   
const upload = multer({ /*storage: storage su equivalente -->*/ storage });

module.exports = upload;
