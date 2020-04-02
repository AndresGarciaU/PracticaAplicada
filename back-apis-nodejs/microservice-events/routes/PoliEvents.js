const express = require('express');
const router = express.Router();
const schemaPoliEvent = require('../models/PoliEvent');
const url = require('url');
const queryString = require('querystring');
const _ = require('lodash');

/* create event */
/* create event */
router.post('/createevent', async (request, response) => {
    try{
        const poliEvent = new schemaPoliEvent({
            titulo: request.body.titulo,
            ciudad: request.body.ciudad,
            direccion: request.body.direccion,
            tipo: request.body.tipo,
            tema: request.body.tema,
            contacto: request.body.contacto,
            presentador: request.body.presentador,
            anio: request.body.anio,
            mes: request.body.mes,
            dia: request.body.dia,
            horaInicio: request.body.horaInicio,
            duracion: request.body.duracion,
            lugar: request.body.lugar
        });

        await poliEvent.save();
        return response.status(201).json(poliEvent);
    }
    catch(error) {
        response.status(500).json({
            estado: 'error',
            mensaje: error.message
        });
    }
});

/* delete one event */
/* delete one event */
router.delete('/deleteevent/:id', async(request, response) => {
    try{
        event = await schemaPoliEvent.findById(request.params.id);
        if(event == null){
            return response.status(400).json({
                estado: 'error',
                mensaje: 'evento no existe'
            });
        }
        else {
            await schemaPoliEvent.remove({_id: request.params.id});
            return response.status(202).json({
                estado: 'exitoso',
                mensaje: `se elimino el evento ${request.params.evento} `
            });
        }
    }
    catch(error){
        response.status(500).json({
            estado: 'error',
            mensaje: error.message
        })
    }
});


/* get all events */
/* get all events */
router.get('/', async (request, response) => {
    try{
        const poliEvent = await schemaPoliEvent.find();
        return response.status(200).json(poliEvent);
    }
    catch(error){
        return response.status(500).json({
            estado: 'error',
            mensaje: error.message 
        });
    }
});

/* get events by differents queries */
/* get events by differents queries */
router.get('/query', async (request, response) => {
    
    const queryObject = url.parse(request.url, true);
    const uri = _.replace(queryObject.search, '?', '');
    const objectQueryParameters = JSON.parse(JSON.stringify(queryString.parse(uri)));

    if(Object.keys(objectQueryParameters).length > 1){
        return response.status(400).json({
            estado: 'error',
            mensaje: 'consultar solo con un parametro'
        });
    }
    else if(Object.keys(objectQueryParameters).length == 0){
        return response.status(400).json({
            estado: 'error',
            mensaje: 'consultar con al menos un parametro'
        });
    }
    else {
        const key = Object.keys(objectQueryParameters);
        try {
            if(_.first(key) == 'id'){
                let eventById = await schemaPoliEvent.findOne({_id: objectQueryParameters.id});
                if(eventById == null){
                    return response.status(404).json({
                        estado: 'error',
                        mensaje: 'id invalido'
                    });
                }
                else {
                    return response.status(200).json(eventById);
                }
            }
            else if(_.first(key) == 'ciudad'){
                let eventByCiudad = await schemaPoliEvent.findOne({ciudad: objectQueryParameters.ciudad});
                if(eventByCiudad == null){
                    return response.status(400).json({
                        estado: 'error',
                        mensaje: `error, no hay eventos en la ciudad ${objectQueryParameters.ciudad}`
                    });
                }
                else {
                    return response.status(200).json(eventByCiudad);
                }
            }
            else if(_.first(key) == 'tipo'){
                let eventByTipo = await schemaPoliEvent.findOne({tipo: objectQueryParameters.tipo});
                if(eventByTipo == null){
                    return response.status(400).json({
                        estado: 'error',
                        mensaje: `error, no hay eventos por tipo ${objectQueryParameters.tipo}`
                    });
                }
                else {
                    return response.status(200).json(eventByTipo);
                }
            }
            else if(_.first(key) == 'tema'){
                let eventByTema = await schemaPoliEvent.findOne({tema: objectQueryParameters.tema});
                if(eventByTema == null){
                    return response.status(400).json({
                        estado: 'error',
                        mensaje: `error, no hay eventos por tipo ${objectQueryParameters.tema}`
                    });
                }
                else {
                    return response.status(200).json(eventByTema);
                }
            }
            else if(_.first(key) == 'anio'){
                let eventByAnio = await schemaPoliEvent.findOne({anio: objectQueryParameters.anio});
                if(eventByAnio == null){
                    return response.status(400).json({
                        estado: 'error',
                        mensaje: `error, no hay eventos por el año ${objectQueryParameters.anio}`
                    });
                }
                else {
                    return response.status(200).json(eventByAnio);
                }
            }
            else if(_.first(key) == 'mes'){
                let eventByMes = await schemaPoliEvent.findOne({mes: objectQueryParameters.mes});
                if(eventByMes == null){
                    return response.status(400).json({
                        estado: 'error',
                        mensaje: `error, no hay eventos por el mes ${objectQueryParameters.mes}`
                    });
                }
                else {
                    return response.status(200).json(eventByMes);
                }
            }
            else if(_.first(key) == 'dia'){
                let eventByDia = await schemaPoliEvent.findOne({dia: objectQueryParameters.dia});
                if(eventByDia == null){
                    return response.status(400).json({
                        estado: 'error',
                        mensaje: `error, no hay eventos por el mes ${objectQueryParameters.dia}`
                    });
                }
                else {
                    return response.status(200).json(eventByDia);
                }
            }
            else {
                return response.status(404).json({
                    estado: 'error',
                    mensaje: 'parametro de consulta no existente'
                })
            }
        }
        catch (error){
            return response.status(500).json({
                estado: 'error',
                mensaje: error.message
            });
        }
    }

});

/* exports */
/* exports */
module.exports = router;