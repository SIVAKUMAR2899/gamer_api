    // const player = db.users;
    const db = require('../models');
    module.exports = {
    verifytoken : async (req,res,next)=>{
    const Player = db.users;
    let id = req.params.id
    let users = await Player.findOne({ where: { id: id } });

    let usertoken =req.headers.authorization;
    let reqtoken = users.token;
    let slicetoken = usertoken.slice(7);
    // console.log(reqtoken);
    // console.log(slicetoken);
 
    let tokenverify =slicetoken.localeCompare(reqtoken);
    // console.log(tokenverify);
    if(tokenverify==0){
        next();
    }else{
        return res.json({
            status:0,
            message:"failed"
        });
    };
  }
};


