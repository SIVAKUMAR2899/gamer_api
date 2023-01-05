const dbconfig = require('../config/dbconfig');

module.exports = (sequelize,DataTypes)=>{
    const claimbonus = sequelize.define('bonuses',{
        bonus_id:{
            type:DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        user_id:{
            type: DataTypes.INTEGER,
            foreignkey: true
        },
        time:{
            type: DataTypes.TIME
        },
        upt_time:{
            type:DataTypes.TIME
        },
        bonus:{
            type:DataTypes.INTEGER
        }
    },
    {
        timestamps: false
    }
    );
    return claimbonus
};