const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Comuna = sequelize.define('comuna', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});


module.exports = Comuna;