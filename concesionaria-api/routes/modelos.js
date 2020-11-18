const express = require('express');
const router = express.Router();
const Modelo = require('../models/Modelo');

// GET todos los items
router.get('/', async (req, res) => {
  try {
    const modelos = await Modelo.find();
    res.setHeader('X-Total-Count', '100');
    res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
    res.json(modelos);
  } catch (error) {
    console.error(error);
  }
});

// GET item
router.get('/:id', async (req, res) => {
  try {
    const modelo = await Modelo.findById(req.params.id);
    res.json(modelo);
  } catch (error) {
    console.error(error);
  }
});

// POST item
router.post('/', async (req, res) => {
  
  const {nombre, anio, desc, precio, id_marca} = req.body;
  
  const modelo = new Modelo({
    nombre: nombre,
    anio: anio,
    desc: desc,
    precio: `$ ${precio}`,
    id_marca: id_marca
  });

  try {
    const modeloGuardado = await modelo.save();
    modeloGuardado.id = modeloGuardado._id;
    const modeloGuardadoConId = await modeloGuardado.save();
    res.json(modeloGuardadoConId);
  } 
  catch (error) {
    console.error(error);
  }
});

// DELETE item
router.delete('/:id', async (req, res) => {
  try {
    const modeloBorrado = await Modelo.deleteOne({_id: req.params.id});
    res.json(modeloBorrado);
  } catch (error) {
    console.error(error);
  }
});

// UPDATE item
router.put('/:id', async (req, res) => {
  const {nombre, anio, desc, precio, id_marca} = req.body;

  try {
    const modelo = await Modelo.findById(req.params.id);

    modelo.nombre = nombre;
    modelo.anio = anio;
    modelo.desc = desc;
    modelo.precio = `$ ${precio}`;
    modelo.id_marca = id_marca;

    const modeloModificado = await modelo.save();
    res.json(modeloModificado);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
