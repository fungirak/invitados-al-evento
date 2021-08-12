var express = require('express');
var router = express.Router();

const Invitado = require('../models/InvitadoSchema');
const myconn = require('express-myconnection');

// Middlewares
router.use(express.json());


// rutas

/**********************  API CRUD UTILIZANDO MONGO DB ATLAS ***************************/

router.get( '/',  async (req, res, next) => {
    const invitado =  await Invitado.find();
    console.log(invitado);
    res.json(invitado);
});

router.get( '/:id', async (req, res, next) => {
    const invitado = await Invitado.findById(req.params.id);
    res.json(invitado);
    });

router.post( '/', async (req, res, next) => {
    const { dni, nombre, apellido, pagado, usuarioInsta, usuarioTw } = req.body;
    const invitado = new Invitado({dni, nombre, apellido, pagado, usuarioInsta, usuarioTw});
    console.log(invitado);
    await invitado.save();
    res.json({status: 'Nuevo invitado agregado a la lista' });
})

router.put( '/:id' , async (req, res, next) => {
    const { dni, nombre, apellido, pagado, usuarioInsta, usuarioTw  } = req.body;
    const newInvitado = { dni, nombre, apellido, pagado, usuarioInsta, usuarioTw };
    await Invitado.findByIdAndUpdate(req.params.id, newInvitado);
    res.json({ status: "Datos del invitado actualizados." });
});

router.delete( '/:id' , async(req, res, next) => {
    await Invitado.findByIdAndRemove(req.params.id);
    res.json({ status: " El invitado ha sido eliminado de la lista. "});
});


module.exports = router;