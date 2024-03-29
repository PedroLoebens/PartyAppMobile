//Códigos dos erros:
//1 = sucesso
//2 = erro

//Constantes
const { Op } = require("sequelize");
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const model=require('./models');
const escape = require('escape-html');

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

//Status e porta do server
let port = process.env.PORT || 3000;
app.listen(port,(req,res)=>{
  console.log('Servidor Rodando na Porta', port);
});

//Routes
app.post('/login',async(req,res)=>{
  //Adiciona o nome digitado pelo usuário em uma variável.
  const typedNameLogin = req.body.nameLogin;
  //Remove espaços em branco do início ou do fim da string
  const nameLogin = typedNameLogin.trim();

  let login = await model.User.findOne({
    where: {
      name: nameLogin, 
    },
    raw:true
  });
  
  if (login === null) {
    res.send(JSON.stringify(2));

  }else {
    //Armazena a senha cadastrada no banco em uma variável e a senha digitada pelo usuário em outra variável
    const passwordDB = login.password;
    const typedPasswordLogin = req.body.passwordLogin;
    const passwordLogin = typedPasswordLogin.trim();

    //Compara a senha digitada com o hash no banco.
    const bcrypt = require('bcrypt');
    const verifyPassword = bcrypt.compareSync(passwordLogin, passwordDB);

    if(verifyPassword === false){
      res.send(JSON.stringify(2));

    }else{
      res.send(JSON.stringify(escape(nameLogin)));
    }
  }
});

app.post('/signup',async(req,res)=>{
  const typedNameUser = req.body.nameUser;
  const typedEmailUser = req.body.emailUser;
  
  const nameUser = typedNameUser.trim();
  const emailUser = typedEmailUser.trim();

  //Requere o módulo bcrypt para a criptografia.
  const bcrypt = require('bcrypt');

  //Realiza a criptografia da senha do usuário.
  const typedPasswordUser = req.body.passwordUser;
  const passwordUser = typedPasswordUser.trim();
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(passwordUser, salt);

  //Verifica se já existe um usuário cadastrado com o mesmo nome e email informado pelo usuário.
  let verifySignUp = await model.User.findOne({
    where: {
      [Op.or]: [{name: nameUser}, {email: emailUser}]
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
      res.send(JSON.stringify(1));
    }
  }
});

app.get('/read', async (req,res)=>{
  let read = await model.Events.findAll({
    attributes: ['id', 'image', 'name', 'musicStyle', 'place', 'date', 'price'],
    raw:true
  });

  res.send(JSON.stringify(read));
});

app.post('/create',async(req,res)=>{
  const typedNameEvent = req.body.nameEvent;
  const typedMusicStyleEvent = req.body.musicStyleEvent;
  const typedPlaceEvent = req.body.placeEvent;

  const nameEvent = typedNameEvent.trim();
  const musicStyleEvent = typedMusicStyleEvent.trim();
  const placeEvent = typedPlaceEvent.trim();

  let create = await model.Events.create({
    'name': nameEvent,
    'musicStyle': musicStyleEvent,
    'place': placeEvent,
    'date': req.body.dateEvent,
    'price': req.body.priceEvent,
    'image': req.body.imageEvent,
    'createdAt':new Date(),
    'updatedAt':new Date()
  });

  if(create){
    res.send(JSON.stringify(1));

  }else {
    res.send(JSON.stringify(2));
  }
});

app.post('/search', async (req,res)=>{
  const typedSearchEvent = req.body.searchEvent;

  const searchEvent = typedSearchEvent.trim();

  let resulSearch = await model.Events.findAll({
    attributes: ['id', 'image', 'name', 'musicStyle', 'place', 'date', 'price'],
    
    //Define por quais atributos será realizada a pesquisa no DB
    where: {
      [Op.or]: [
        {
          name: {
          [Op.substring]: searchEvent,
          }
        }, 
        {
          place: {
          [Op.substring]: searchEvent,
          }
        },
        {
          musicStyle: {
          [Op.substring]: searchEvent,
          }
        }
      ], 
    },
    raw:true
  });

  res.send(JSON.stringify(resulSearch));
});
