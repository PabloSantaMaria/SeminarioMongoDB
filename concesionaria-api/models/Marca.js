const mongoose = require('mongoose');

const MarcaSchema = mongoose.Schema({
  id: String,
  nombre: String,
});

module.exports = mongoose.model('Marcas', MarcaSchema);