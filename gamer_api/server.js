const express = require("express");
const cors = require("cors");
// const lowdb = require('lowdb')
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const db = require("./config/dbconfig")
// var corOptions = {
//     origin: "http://localhost:5000"
// }

const router = require('./routes/playersRouter')

const options ={
  definition:{
    openapi: "3.0.0",
    info:{
       title: "GAME",
       version: "1.0.0 " ,
       description: "GAMERS details api",
    },
    servers: [
      {
       url: "http://localhost:5000",
      },
    ],
  },
   apis:["./routes/*js"],
};

const specs = swaggerJsDoc(options)

const app = express();

// app.use("/", router);

// app.use('/api/gamer/users', router)
// app.use('/api/gamer/skills', router)


app.get('/',(req,res) => {
  res.send("GAMER");
}); 

app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs));

// app.use(cors(corOptions)); 
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 5000

app.use('/playersRouter',router)

app.listen(PORT,()=>{
    console.log('server is runningon port ${PORT}');
});