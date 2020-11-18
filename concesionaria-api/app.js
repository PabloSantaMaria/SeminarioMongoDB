const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Puerto
const PORT = process.env.PORT || 5000;

// Rutas
const modelosRouter = require('./routes/modelos');
const marcasRouter = require('./routes/marcas');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/modelos', modelosRouter);
app.use('/marcas', marcasRouter);

// Conección a MongoDB Cloud
mongoose.connect(
  'mongodb+srv://user:user@cluster0.rdo9y.mongodb.net/Concesionaria', 
  {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => console.log(`MongoDB connected to database ${mongoose.connection.db.databaseName}`)
);

// Run server
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
