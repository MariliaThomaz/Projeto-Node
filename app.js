const express    = require('express');//
const exphbs     = require('express-handlebars');
const app        = express();//
const path       = require('path');//
const db         = require('./DB/connection');//
const bodyParser = require('body-parser');//
const Job        = require('./models/Job');
const Sequelize  = require('sequelize');
const Op         = Sequelize.Op;

const PORT = 3000;//

app.listen(PORT, function() {
    console.log(`O Express está rodando na porta ${PORT}`);
  });//
//tem usar  o boby parser
// body parser
app.use(bodyParser.urlencoded({ extended: false }));

//handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));//falando qual é o pricipal
app.set('view engine', 'handlebars');


//static folder
app.use(express.static(path.join(__dirname, 'public')));

// DB  Conexão
db
.authenticate()
.then(() => {// faz teste  para cada ves que sitema  sera  inciado
  console.log("Conectou ao banco com sucesso");
})
.catch(err => {
  console.log("Ocorreu um erro ao conectar", err);
});


//rota
// routes
app.get('/', (req, res) => {

    let search = req.query.job;
    let query  = '%'+search+'%'; // PH -> PHP, Word -> Wordpress, press -> Wordpress
  
    if(!search) {
      Job.findAll({order: [
        ['createdAt', 'DESC']
      ]})
      .then(jobs => {
    
        res.render('index', {
          jobs
        });
    
      })
      .catch(err => console.log(err));
    } else {
      Job.findAll({
        where: {title: {[Op.like]: query}},
        order: [
          ['createdAt', 'DESC']
      ]})
      .then(jobs => {
        console.log(search);
        console.log(search);
    
        res.render('index', {
          jobs, search
        });
    
      })
      .catch(err => console.log(err));
    }
  
    
  });

//definido as rotas de  maneria  unica
app.use('/jobs', require('./routes/jobs'));// estou consequindo acendo as rotas dentro daquele arquivos