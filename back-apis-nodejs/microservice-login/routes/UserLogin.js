const express = require('express');
const router = express.Router();
const url = require('url');
const queryString = require('querystring');
const _ = require('lodash');
const schemaUserLogin = require('../models/UserLogin');
const schemaUsersExternalRegister = require('../models/UserExternalRegister');
const schemaUserExternalCode = require('../models/UserExternalCode');


/* login one user */
/* login one user */
router.post('/userlogin', async (request, response) => {
    try {
        let userLogin = await schemaUserLogin.findOne({
            user: request.body.user,
            code: request.body.code
        });

        if(userLogin == null){
            return response.status(404).json({
                estado: 'error',
                mensaje: 'login incorrecto'
            })
        }
        else {
            return response.status(200).json(userLogin);
        }
    }
    catch(error){
        return response.status(500).json({
            estado: 'error',
            mensaje: error.message
        });
    }
});

/* create one standart user */
/* create one standart user */
router.post('/createuser/standart', async (request, response) => {

    const userLogin = new schemaUserLogin({
        user: request.body.user,
        code: request.body.code
    });

    try{
        queryUserLogin = await schemaUserLogin.findOne({
            user: userLogin.user,
            code: userLogin.code,
        });

        if(queryUserLogin == null){
            const newUserLogin = await userLogin.save();
            return response.status(201).json(newUserLogin);
        }
        else {
            return response.status(400).json({
                estado: 'error',
                mensaje: 'Usuario ya existe'
            });
        }
    }
    catch(error){
        response.status(500).json({
            estado: 'error',
            mensaje: error.message 
        });
    }
})

/* delete one standart user */
/* delete one standart user */
router.delete('/deleteuser/standart/:id', async(request, response) => {
    try{
        user = await schemaUserLogin.findById(request.params.id);
        if(user == null){
            return response.status(400).json({
                estado: 'error',
                mensaje: 'Usuario no existe'
            });
        }
        else if(user.typeUser == 'invitado'){
            return response.status(400).json({
                estado: 'error',
                mensaje: 'usuario externo no se puede eliminar con este metodo'
            });
        }
        else {
            await schemaUserLogin.remove({_id: request.params.id});
            return response.status(202).json({
                estado: 'exitoso',
                mensaje: 'se elimino el recurso ' + request.params.id
            });
        }
    }
    catch (error) {
        response.status(500).json({
            estado: 'error',
            mensaje: error.message 
        });
    }
})

/* delete one external user */
/* delete one external user */
router.delete('/deleteuser/external/:id', async (request, response) => {
    try {
        userRegister = await schemaUsersExternalRegister.findById(request.params.id);
        userLogin = await schemaUserLogin.findById(request.params.id);

        if(userRegister == null || userLogin == null){
            return response.status(400).json({
                estado: 'error',
                mensaje: 'Usuario no existe'
            });
        }
        else {
            await schemaUsersExternalRegister.remove({_id: request.params.id});
            await schemaUserLogin.remove({_id: request.params.id});
            return response.status(202).json({
                estado: 'exitoso',
                mensaje: 'se elimino el recurso ' + request.params.id
            });
        }
    }
    catch(error) {
        response.status(500).json({
            estado: 'error',
            mensaje: error.message
        });
    }
})

/* create one external user */
/* create one external user */
router.post('/createuser/external', async (request, response) => {
    
    try {

        var currentDate = new Date();
        var code = '';
        var firstCode = '';
        var lastCode = '';

        // current year
        code += currentDate.getFullYear().toString();
        // current month
        let month = currentDate.getMonth();
        if(month <= 6){ 
            code += '11'; 
        }
        else { 
            code += '22'; 
        }

        let userExternalCode = await schemaUserExternalCode.findOne({_id: '5e7b79653613aa83b9037a67'});
        
        mongoFirstCode = userExternalCode.firstCode;
        mongoLastCode = userExternalCode.lastCode + 1;

        if(mongoLastCode > 99){
            mongoFirstCode += 1;
            mongoLastCode = 1;
        }

        userExternalCode.firstCode = mongoFirstCode;
        userExternalCode.lastCode = mongoLastCode;
        firstCode = mongoFirstCode.toString();
        lastCode = mongoLastCode.toString();
        await userExternalCode.save();

        code += firstCode + lastCode;

        const userExternalRegister = new schemaUsersExternalRegister({
            mail: request.body.mail,
            name1: request.body.name1,
            name2: request.body.name2,
            lastName1: request.body.lastName1,
            lastName2: request.body.lastName2,
            reason: request.body.reason,
            creationDate: currentDate,
            user: buildUser(request),
            code: code,
            typeUser: request.body.typeUser,
        });
        await userExternalRegister.save();

        const userLogin = new schemaUserLogin({
            _id: userExternalRegister._id,
            user: userExternalRegister.user,
            code: userExternalRegister.code,
            typeUser: userExternalRegister.typeUser
        });
        await userLogin.save();

        return response.status(200).json(userExternalRegister);
    }
    catch(error){
        return response.status(500).json({
            estado: 'error',
            mensaje: error.message
        })
    }
})

/* get all users */
/* get all users */
router.get('/userlogin', async (request, response) => {
    try{
        const usersLoginArray = await schemaUserLogin.find();
        return response.status(200).json(usersLoginArray);
    }
    catch(error) {
        return response.status(500).json({
            estado: 'error',
            mensaje: error.message 
        });
    }
})

/* get all external users */
/* get all external users */
router.get('/userexternal', async (request, response) => {
    try{
        const usersLoginArray = await schemaUsersExternalRegister.find();
        return response.status(200).json(usersLoginArray);
    }
    catch(error) {
        return response.status(500).json({
            estado: 'error',
            mensaje: error.message 
        });
    }
})

/* get one userLogin by query string */
/* get one userLogin by query string */
router.get('/userlogin/query', async (request, response) => {
    
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
            if(_.first(key) == 'code'){
                let userLoginByCode = await schemaUserLogin.findOne({code: objectQueryParameters.code});
                if(userLoginByCode == null){
                    return response.status(404).json({
                        estado: 'error',
                        mensaje: 'codigo invalido'
                    });
                }
                else {
                    return response.status(200).json(userLoginByCode);
                }
            }
            else if(_.first(key) == 'id'){
                let userLoginById = await schemaUserLogin.findOne({_id: objectQueryParameters.id});
                if(userLoginById == null){
                    return response.status(400).json({
                        estado: 'error',
                        mensaje: 'id invalido'
                    });
                }
                else {
                    return response.status(200).json(userLoginById);
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
})

/* middlewares */
/* middlewares */
function buildUser(request){
    
    let user = request.body.name1.toLowerCase().substring(0,1) + 
               request.body.lastName1.toLowerCase() +
               request.body.lastName1.toLowerCase().substring(0,2);

    return user;
}

/* exports */
/* exports */
module.exports = router;