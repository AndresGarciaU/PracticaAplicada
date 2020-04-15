const {Schema, model} = require ('mongoose');

const perfilesSchema = new Schema ({
    name1: {
        type: String
    },
    name2: {
        type: String
    },
    lastName1: {
        type: String
    },
    lastName2: {
        type: String
    },
    code: {
        type: Number
    },
    typeUser: {
        type: String
    }, 
    eventosAsistidos: {
        type: String
    },
    correoElectrocnico: {
        type: String
    },
    numeroTelefonico: {
        type: Number
    },
    tipoDeUsuario: {
        type: String
    },
    nombreDeUsuario: {
        type: String
    }
})

module.exports = moongose.model ('Perfiles', perfilesSchema)
