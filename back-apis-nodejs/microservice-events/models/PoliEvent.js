const mongoose = require('mongoose');

const poliEventSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        direccion: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        tema: {
            type: String,
            required: true
        },
        contacto: {
            type: String,
            required: true
        },
        presentador: {
            type: String,
            required: true
        },
        anio: {
            type: Number,
            required: true
        },
        mes: {
            type: String,
            required: true
        },
        dia: {
            type: String,
            required: true
        },
        horaInicio: {
            type: String,
            required: true
        },
        duracion: {
            type: Number,
            required: true
        },
        lugar: {
            type: String,
            required: true
        },
    },
    {
        collection: 'poliEvent'
    }
);

module.exports = mongoose.model('PoliEvent', poliEventSchema);