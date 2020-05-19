const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const config = require('./config/keys');
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('connected to mongoDB'))
    .catch(err => {
        console.error(`MongoDB connection error: ${err}`);
    });

require('./models/Registration');

app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    //js and css files
    app.use(express.static('client/build'));

    //index.html for all page routes
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



const server = app.listen(process.env.PORT || 5000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://${host}:${port}');
}); 

