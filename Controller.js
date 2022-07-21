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
  //Adiciona o nome e email digitado pelo usuário em variáveis.
  const typedNameLogin = req.body.nameLogin;
  //Remove espaços em branco do início ou do fim da string
  const nameLogin = typedNameLogin.trim();

  let login = await model.User.findOne({
    where: {
      name: nameLogin, 
    },
    raw:true
  });
  //Armazena a senha cadastrada no banco em uma variável e a senha digitada pelo usuário em outra variável
  const passwordDB = login.password;
  const typedPassword = req.body.passwordLogin;

  //Compara a senha digitada com o hash no banco.
  const bcrypt = require('bcrypt');
  const verifyPassword = bcrypt.compareSync(typedPassword, passwordDB);

  if(login !== null && verifyPassword === true){
    res.send(JSON.stringify(1));

  }else{
    res.send(JSON.stringify('Usuário e/ou senha inválidos!'));

  }
});

app.post('/signup',async(req,res)=>{
  //Adiciona o nome e email digitado pelo usuário em variáveis.
  const typedNameUser = req.body.nameUser;
  const typedEmailUser = req.body.emailUser;
  //Remove espaços em branco do início ou do fim da string
  const nameUser = typedNameUser.trim();
  const emailUser = typedEmailUser.trim();


  //Requere o módulo bcrypt para a criptografia.
  const bcrypt = require('bcrypt');

  //Realiza a criptografia da senha do usuário.
  const passwordUser = req.body.passwordUser;
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(passwordUser, salt);

  //Verifica se já existe um usuário cadastrado com o mesmo nome e email informado pelo usuário.
  let verifySignUp = await model.User.findOne({
    where: {
      [Op.or]: [{name: req.body.nameUser}, {email: req.body.emailUser}]
    },
    raw:true
  });

  if(verifySignUp !== null) {
    res.send(JSON.stringify(2));

  }else {
    let signUp = await model.User.create({
      'name':nameUser,
      'email':emailUser,
      'password':passwordHash,
      'createdAt':new Date(),
      'updatedAt':new Date()
    });

    if(signUp){
      res.send(JSON.stringify('Usuário cadastrado com sucesso!'));
    }
  }
});

app.get('/read', async (req,res)=>{
  let read = await model.Events.findAll({
    attributes: ['id', 'image', 'name', 'place', 'date', 'price'],
    raw:true
  });

  res.send(JSON.stringify(read));
});

app.post('/create',async(req,res)=>{
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
      [Op.or]: [
        {
          name: {
          [Op.substring]: req.body.searchEvent,
          }
        }, 
        {
          place: {
          [Op.substring]: req.body.searchEvent,
          }
        }
      ], 
    },
    raw:true
  });

  res.send(JSON.stringify(resulSearch));
});

//Start e status server
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
  console.log('Servidor Rodando');
});
