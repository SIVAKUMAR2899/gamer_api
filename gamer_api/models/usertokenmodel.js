const dbconfig = require('../config/dbconfig');

module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define('user_token', {
        token_id:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        user_id:{
            type: DataTypes.INTEGER,
            foreignkey: true
        },
        device_token: {
            type: DataTypes.STRING,
        },
        time:{
            type: DataTypes.TEXT
        }
    },
    {
        timestamps: false
    }
    );
    return Token
};