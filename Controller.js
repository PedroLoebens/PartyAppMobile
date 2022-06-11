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

app.get('/read', async (req,res)=>{
    let read = await model.Events.findAll({
        attributes: ['id', 'image', 'name', 'place', 'date', 'price'],
        raw:true
    });
    res.send(JSON.stringify(read));
    console.log(read);
});

//Start server
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});
