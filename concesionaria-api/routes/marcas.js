const express = require('express');
const router = express.Router();
const Marca = require('../models/Marca');

// GET todos los items
router.get('/', async (req, res) => {
  try {
    const marca = await Marca.find();
    res.setHeader('X-Total-Count', '100');
    res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
    res.json(marca);
  } catch (error) {
    console.error(error);
  }
});

// GET item
router.get('/:id', async (req, res) => {
  try {
    const marca = await Marca.findById(req.params.id);
    res.json(marca);
  } catch (error) {
    console.error(error);
  }
});

// POST item
router.post('/', async (req, res) => {
  
  const {nombre} = req.body;
  
  const marca = new Marca({
    nombre: nombre
  });
  
  try {
    const marcaGuardada = await marca.save();
    marcaGuardada.id = marcaGuardada._id;
    const marcaGuardadaConId = await marcaGuardada.save();
    res.json(marcaGuardadaConId);
  } 
  catch (error) {
    console.error(error);
  }
});

// DELETE item
router.delete('/:id', async (req, res) => {
  try {
    const marcaBorrada = await Marca.deleteOne({_id: req.params.id});
    res.json(marcaBorrada);
  } catch (error) {
    console.error(error);
  }
});

// UPDATE item
router.put('/:id', async (req, res) => {
  const {nombre} = req.body;

  try {
    const marca = await Marca.findById(req.params.id);

    marca.nombre = nombre;

    const marcaModificada = await marca.save();
    res.json(marcaModificada);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
