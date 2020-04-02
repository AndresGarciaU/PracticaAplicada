require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const poliEventsRouter = require('./routes/PoliEvents');

/* configurations */
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

/* mongoose */
mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected database'));

/* middlewares */
app.use(express.json());

/* controllers */
app.use('/api/polievents/events', poliEventsRouter)

/* start the server */
app.listen(app.get('port'), () => {
    console.log('Start the server')
})