const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./index');
dotenv.config({path: './config.env'});

const DB = process.env.DATABASE_LOCAL;

const dbCon = mongoose.connect( DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    //console.log(con.connections);
    console.log('connection successful');
});


const tourScheme = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Must have a name'],
        unique:true
    },
    rating:{
        type:Number,
        default: 4.5
    },
    price:{
        type: Number,
        required:[true,'must hava a number']
    }
});

const Tourr = mongoose.model('Tourr',tourScheme);
exports.Tourr;

const testTour = new Tourr({
    name:'c+++',
    price:700,
    rating:5.0
});

testTour.save().then(doc => {
 console.log(doc);
})


const port = 3000;
app.listen(port, () => {
    console.log('App running on port $(port)');
})
