const express = require('express');
const router = express.Router();
const schemaPoliEvent = require('../models/Perfiles');
const url = require('url');
const queryString = require('querystring');
const _ = require('lodash');

//ubicar los datos del usuario

router.post('/profile', async (request, response) => {
    try{
        const datosDelPerfil = new schemaDatosPerfil({
            name1: request.body.name1,
            name2: request.body.name2,
            lastName1: request.body.lastName2,
            lastName2: request.body.lastName2,
            code: request.body.code,
            typeUser: request.body.typeUser,
            eventosAsistidos: request.body.eventosAsistidos,
            correoElectrocnico: request.body.correoElectrocnico,
            numeroTelefonico: request.body.numeroTelefonico,
            tipoDeUsuario: request.body.tipoDeUsuario,
            nombreDeUsuario: request.body.nombreDeUsuario
        });
        await datosDelPerfil.findByname1();
        return response.status(201).json(datosDelPerfil);
    }
    catch(error) {
        response.status(500).json({
            estado: 'error',
            mensaje: error.message
        });
    }
});
    