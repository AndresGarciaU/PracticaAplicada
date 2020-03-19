import { Router } from 'express';
import { connect } from '../database';
import { ObjectID } from 'mongodb';
import { UserLoginModel } from '../models/UserLoginModel';
import _ from 'lodash';

const controller = Router();

controller.post('/', async (request, response) => {
	let userLogin = new UserLoginModel(request.body._user, request.body._password);
	const db = await connect();
	const queryUser = await db.collection('UserLogin').findOne(
		{_user: userLogin.getUser(), _password: userLogin.getPassword()}
	);
	if(isValid(queryUser)){
		response.json({
			status: 'ok',
			message: `User: ${userLogin.getUser()} found`
		});
	}
	else{
		response.json({
			status: 'ko',
			message: `User: ${userLogin.getUser()} not found`
		});
	}
	
});

/* Behavior functions */

const isValid = val => {
	if(_.isUndefined(val))
		return false;
	if(_.isNull(val))
		return false;
	return true;
}

export default controller;