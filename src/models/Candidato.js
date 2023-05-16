const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Candidato = sequelize.define('candidato', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Candidato;