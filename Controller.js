//Constantes
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const model=require('./models');

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.post('/create',async(req,res)=>{
    // console.log(req.body.nameEvent);
    let reqs = await model.Events.create({
        'name':req.body.nameEvent,
        'place':req.body.placeEvent,
        'date':req.body.dateEvent,
        'price':req.body.priceEvent,
        'image':req.body.imageEvent,
        'createdAt':new Date(),
        'updatedAt':new Date()
    });
    if(reqs){
        res.send(JSON.stringify('O evento foi cadastrado com sucesso!'));
    }
});

//Start server
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});
