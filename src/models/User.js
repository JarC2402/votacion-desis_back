const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alias: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rut: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    web: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    tv: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    socialred: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    friends: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

module.exports = User;