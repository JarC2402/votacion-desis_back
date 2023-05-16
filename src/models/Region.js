const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Region = sequelize.define('region', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Region;