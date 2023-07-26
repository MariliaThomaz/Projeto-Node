const Sequelize = require('sequelize');
const db = require('../DB/connection');

//criando um objeto Job
const Job = db.define('job', {

    sabor: {
        type: Sequelize.STRING,
    },
    quantidade: {
        type: Sequelize.INTEGER,
    },
    validadeF: {
        type: Sequelize.INTEGER,
    },
    validadeV: {
        type: Sequelize.INTEGER,
    },
    valorT: {
        type: Sequelize.BLOB,
    }
});

module.exports = Job