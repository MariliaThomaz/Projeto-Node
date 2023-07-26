//Sequelize para  usar  bancos realcionais  com o node
const Sequelize =require('sequelize');
// para faz  conequição com o banco uma estacia
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './DB/app.db'
});

//espotar fora 
module.exports = sequelize