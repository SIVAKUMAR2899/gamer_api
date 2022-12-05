const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        gender:{
            type: DataTypes.STRING,
        },
        contact: {
            type: DataTypes.INTEGER,
        },
        address: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.STRING,
        },
        updatedAt: {
            type: DataTypes.STRING,
        },
        token: {
            type: DataTypes.STRING,
        }

    },
        {
            timestamps: false
        }
    );

    return Player

};