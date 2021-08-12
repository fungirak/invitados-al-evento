const mongoose = require('mongoose');
const { Schema } = mongoose;

const InvitadoSchema = new Schema({
    dni: {type: Number, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    pagado: {type: String, required: true},
    usuarioInsta: {type: String},
    usuarioTw: {type: String}
})


module.exports = mongoose.model('Invitado', InvitadoSchema);