const dbconfig = require('../config/dbconfig');

module.exports = (sequelize,DataTypes)=>{
    const Dice = sequelize.define('dice_purchases',{
        id:{
            type:DataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        user_id:{
            type: DataTypes.INTEGER,
            foreignkey: true
        },
        dice_id:{
            type: DataTypes.INTEGER
        },
        purchase_amt:{
            type:DataTypes.STRING
        },
        status:{
            type:DataTypes.INTEGER
        }
    },
    {
        timestamps: false
    }
    );
    return Dice
};