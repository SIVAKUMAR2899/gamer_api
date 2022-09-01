// var mysql = require('mysql');

// module.exports = {
//     HOST :"sql10.freemysqlhosting.net",
//     DB:"sql10515123",
//     USER:"sql10515123",
//     PASSWORD:"pbhxvU42tX",
//     dialect:"mysql",

//     pool:{
//         max: 10,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
