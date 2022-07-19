const { Op } = require("sequelize");
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const model=require('./models');

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.post('/login',async(req,res)=>{
  let login = await model.User.findOne({
    where: {
      name: req.body.nameLogin, 
      password: req.body.passwordLogin
    },
    raw:true
  });

  if(login !== null){
    res.send(JSON.stringify(1));

  }else{
    res.send(JSON.stringify('Usuário e/ou senha inválidos!'));

  }
  // console.log(login);
});

app.post('/signup',async(req,res)=>{
  let signUp = await model.User.create({
    'name':req.body.nameUser,
    'email':req.body.emailUser,
    'password':req.body.passwordUser,
    'createdAt':new Date(),
    'updatedAt':new Date()
  });
  
  if(signUp){
    res.send(JSON.stringify('Usuário cadastrado com sucesso!'));
  }
});

app.get('/read', async (req,res)=>{
  let read = await model.Events.findAll({
    attributes: ['id', 'image', 'name', 'place', 'date', 'price'],
    raw:true
  });

  res.send(JSON.stringify(read));
  // console.log(read);
});

app.post('/create',async(req,res)=>{
  // console.log(req.body.nameEvent);
  let create = await model.Events.create({
    'name':req.body.nameEvent,
    'place':req.body.placeEvent,
    'date':req.body.dateEvent,
    'price':req.body.priceEvent,
    'image':req.body.imageEvent,
    'createdAt':new Date(),
    'updatedAt':new Date()
  });

  if(create){
    res.send(JSON.stringify('O evento foi cadastrado com sucesso!'));
  }
});

app.post('/search', async (req,res)=>{
  let resulSearch = await model.Events.findAll({
    attributes: ['id', 'image', 'name', 'place', 'date', 'price'],
    where: {
        name: {
            [Op.substring]: req.body.searchEvent,
        }
    },
    raw:true
  });

  res.send(JSON.stringify(resulSearch));
  // console.log(resulSearch);
});

//Start e status server
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
  console.log('Servidor Rodando');
});
