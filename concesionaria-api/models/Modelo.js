const mongoose = require('mongoose');

const ModeloSchema = mongoose.Schema({
  id: String,
  nombre: String,
  anio: String,
  desc: String,
  precio: String,
  creado: {
    type: Date,
    default: Date.now 
  },
  id_marca: String
});

module.exports = mongoose.model('Modelos', ModeloSchema);
