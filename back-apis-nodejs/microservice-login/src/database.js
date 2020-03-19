import MongoClient from 'mongodb';

export async function connect(){
	try{
		const client = await MongoClient.connect('mongodb://localhost:27017', {
			useUnifiedTopology: true
		});
		const db = client.db('api-login');
		console.log('DB is connected');
		return db;
	}
	catch(e){
		console.log(e);
	}
};