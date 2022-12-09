//const { player, player, player } = require('../models')
const { users } = require('../models');
const db = require('../models');
const { sign } = require('jsonwebtoken');
const { hashSync,genSaltSync,compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
const Player = db.users;
const Token = db.user_token;

//1.post method

const addUser = async (req, res) => {
    const salt = genSaltSync(10);
    const body = req.body;
    body.password = hashSync(req.body.password,salt);
    //  console.log(body.password);
    const users = await Player.create(body);
    if(users){
        res.status(200).json({
            code: res.statusCode,
            data: users,
            message: 'user saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"user doesn't saved"
        });
    }
}

// 2.login

const login = async (req,res) => {
    const { email,password } = req.body;
    let user = await Player.findOne({ where : { email : email}});
    if(!user){
        return res.json({
            success : 0,
            message : "invalid email"
        });
    }
    let userid = user.user_id;
    console.log(userid);
        const result = compareSync(password,user.password);
        if(result){
            const newtoken = jwt.sign({ result: user},"abcd1234",{expiresIn:3600});
            console.log(newtoken);
            let token =await Token.create({device_token:newtoken},{where: {user_id:userid}});
            console.log(token);
            return res.json({
                code:1,
                message:"login success",
                token:newtoken
            });
        }else{
            return res.json({
                code : 0,
                message : "Invalid password",

            });
        }
}

// 3.update password

const updatePassword = async (req,res) => {

    const { email,oldpassword,newpassword} = req.body;
    let user = await Player.findOne({ where : { email : email}});
    if(!user){
        return res.json({
            success : 0,
            message : "invalid email"
        });
    }
    let userid = user.user_id;
    console.log(userid);

    const Password = compareSync(oldpassword,user.password);
    console.log(Password);

    if(Password){
        const salt = genSaltSync(10);
        let hpassword = hashSync(newpassword,salt);
        console.log(hpassword);
        const password=hpassword;
        

        const new_password = await Player.update(password,{ where: { user_id: userid}});
        console.log(userid);
        console.log(user.user_id);
        console.log(Player.Password);

        return res.json({
            status:1,
            message:"Password updated successfully"
        });
    }else{
        return res.json({
            status:0,
            message:"Password doesn't update"
        });
    }
}

//4.get all users

const getAllUser = async (req, res) => {
    let users = await Player.findAll({Player});
    if(users){
        res.status(200).send(users);
    }else{
        return res.json({
            status:0,
            message:"User doesn't return successfully"
        })
    }
}

//5.get by id

const getOneUser = async (req, res) => {
    let user_id = req.params.user_id
    let users = await Player.findOne({ where: { user_id: user_id } });
    if(users){
        return res.status(200).json({
            data:users
        });
    }else{
        return res.json({
            status:0,
            message:"User is invalid"
        });
    }  
}

//6.edit profile method

const updateUser = async (req, res) => {
    let user_id = req.params.user_id
    const users = await Player.update(req.body, { where: { user_id: user_id } });
    if(users){
        res.status(200).json({
            data: users,
            code: res.statusCode,
            message: 'User update success'
        });
    }else{
        return res.json({
            status:0,
            message:"User update failed"
        });
    }
}



//7.delete method

const deleteUser = async (req, res) => {
    let user_id = req.params.user_id
    await users.destroy({ where: { user_id: user_id } })
    res.status(200).json({
        code: res.statusCode,
        data: users,
        message: 'Deleted successfully'
    })
}

module.exports = {
    addUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteUser,
    login,
    updatePassword
};