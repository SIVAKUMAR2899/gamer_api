const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Playerskill = sequelize.define('skills', {
        sid: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        matches: {
            type: DataTypes.INTEGER,
        },
        levels: {
            type: DataTypes.INTEGER
        },
        coins: {
            type: DataTypes.INTEGER
        },
        energy:{
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.STRING,
        },
        updatedAt: {
            type: DataTypes.STRING
        }

    },
        {
            timestamps: false
        }
    );

    return Playerskill

};