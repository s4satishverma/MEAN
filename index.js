const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json());

const dbTable = require('./server').Tourr;

const { Mongoose } = require('mongoose');

app.get('/', (req,res) => {
    res
    .status(200)
    .json({message:'Hello from the server', app: 'Natours'});
     
     dbTable.findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});

const tours = JSON.parse(
    fs.readFileSync('./starter/dev-data/data/tours-simple.json')
);

app.get('/api/v1/tours', (req,res) => {
 res
 .status(200)
 .json({
     status:'success',
     data:{tours}
 });
});

app.post('/api/v1/tours', (req,res) => {
    console.log(req.body);
    res.send('Done');
});


app.patch('/api/v1/tours/:id', (req,res) => {
    
    res.status(200).json({ 
        status:'success',
        data:{ 
            tour:'<updated status>'
            }
    }); 
});

module.exports = app;