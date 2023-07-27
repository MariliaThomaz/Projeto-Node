//esta rota sera  um post que ira comunicar com a API
// que  ira  fazer ira  fazer  Sequelize com o banco

const express = require('express');// ira tomar conta das rotas
const router  = express.Router();//objeto do espress é este Router
const Job     = require('../models/Job');//chamando o  model

// faz  um  teste
router.get('/test', (req, res) => {
    res.send('deu certo');
  });



//quera  priema  rota que  é POST 

// detalhe da vaga -> view/1, view/2
router.get('/view/:id', (req, res) => Job.findOne({
    where: {id: req.params.id}
  }).then(job => {
  
    res.render('view', {
      job
    });
  
  }).catch(err => console.log(err)));
  
// form da rota de envio
router.get('/add', (req, res) => {
    res.render('add');
  })
  


//add o JOB vida POST
router.post('/add', (req, res)=> {

    //todos  os dados BD  vão vir  atraves desta requisição req.body;
   let{sabor, quantidade, validadeF, validadeV, valorT} = req.body;

   //inseri dados no citema
   Job.create({
    sabor,//agumetos
    quantidade,
    validadeF,
    validadeV,
    valorT

   })
   //retonar promense 
   .then(()=> res.redirect('/'))//quandp der certo ele direciona para home
   .catch(err => console.log(err));//caso der erro 

});
module.exports = router