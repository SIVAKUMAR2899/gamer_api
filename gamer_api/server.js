const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const router = require('./routes/playersRouter')
// const db = require("./config/dbconfig")
// var corOptions = {
//     origin: "http://localhost:5000"
// }

const PORT = process.env.PORT || 5000

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


app.get('/',(req,res) => {
  res.send("GAMER");
}); 


app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs));

app.use("/", router);

app.use('/api/gamer/users', router)
app.use('/api/gamer/skills', router)

// app.use(cors(corOptions)); 
app.use(cors()); 
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}))



app.use('/playersRouter',router)

app.listen(PORT,()=>{
    console.log('server is runningon port ${PORT}');
});