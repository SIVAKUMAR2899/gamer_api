// const sequelize = require('sequelize');
const dbconfig = require('../config/dbconfig');

const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        // operatorsAliases: false,

        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        }
    }
)

// sequelize.authenticate()
// .then(()=>{
//     console.log('connected..')
// })
// .catch(err => {
//     console.log('Error'+ err)
// })

const db = {}

// db.Sequelize = Sequelize
// db.sequelize = sequelize


db.users = require('./usermodel')(sequelize, DataTypes)
db.skills = require('./skillmodel')(sequelize, DataTypes)

// db.sequelize.sync({ force: false })
// .then(() => {
//     console.log('yes re-sync done!')
// })


module.exports = db;