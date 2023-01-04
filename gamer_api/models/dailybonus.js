const dbconfig = require('../config/dbconfig');

module.exports = (sequelize,DataTypes)=>{
    const Dailybonus = sequelize.define('daily_bonus_transactions',{
        id:{
            type:DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        user_id:{
            type: DataTypes.INTEGER,
            foreignkey: true
        },
        bonus:{
            type: DataTypes.STRING
        },
        dates:{
            type:DataTypes.TIME
        }
    },
    {
        timestamps: false
    }
    );
    return Dailybonus
};