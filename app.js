const express    = require('express');
const app        = express();
const db         = require('./DB/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
    console.log("O Express está rodando na  porta: ", PORT);
});
//tem usar  o boby parser
app.use(bodyParser.urlencoded({ extended: false}));


// DB  Conexão
db
.authenticate()
.then(()=> { // faz teste  para cada ves que sitema  sera  inciado
    console.log("Conectpi ao bamcp com sucesso");
})
.catch(err => {
    console.log("Ocorreu um erro ao conecta", err);
});

//rota
app.get('/', (req, res)=> {
    res.send("Esta funcionado 4");
});

//definido as rotas de  maneria  unica
app.use('/jobs', require('./routes/jobs'));// estou consequindo acendo as rotas dentro daquele arquivos