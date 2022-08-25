const express = require("express");
const cors = require("cors");

const app = express();

const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

var corOptions = {
    origin: "http://localhost:5000"
}

app.use(cors(corOptions)); 
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const router = require('./routes/playersRouter')

app.use("/", router);

app.use('/api/gamer/users', router)
app.use('/api/gamer/skills', router)

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
   apis:["./routes/*.js"],
};

const specs = swaggerJsDoc(options)

// app.get('/',(req,res) => {
//   res.send("GAMER");
// }); 

app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs));

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('server is runningon port ${PORT}');
});