//const { player, player, player } = require('../models')
const { users } = require('../models');
const db = require('../models');
const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Player = db.users

//1.post method

const addUser = async (req, res) => {
    console.log('hi');
    // let info = {
    //     id: req.body.id,
    //     firstname: req.body.firstname,
    //     lastname: req.body.lastname,
    //     age: req.body.age,
    //     gender: req.body.gender,
    //     email: req.body.email,
    //     contact: req.body.contact,
    //     address: req.body.address,
    //     password: req.body.password,
    //     created_at: "24-08-2022",
    //     updated_at: "24-08-2022"
    // }
    const body = req.body;
    console.log(req.body);
    const users = await Player.create(body)
    res.status(200).json({
        code: res.statusCode,
        data: users,
        message: 'success'
    });
    console.log(users)
}

const login = async (req,res) => {
   
    // getuserbyemail(body.email,(err,results)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     if(!results){
    //         return res.json({
    //             success : 0 ,
    //             message : "invalid email"
    //         })
    //     }
    const body = req.body;
        const result =bcrypt.compare(body.password,users.password);
        if(result){
            const token = jwt.sign({ result: users},"asd1234",{expiresIn:60});
            return res.json({
                success:1,
                message:"login success",
                token:token
            });
        }else{
            return res.json({
                success : 0,
                message : "login failed",

            });
        }
    
}

//2.get all users

const getAllUser = async (req, res) => {
    let users = await Player.findAll({
        attributes: [
            'id',
            'firstname',
            'lastname',
            'age',
            'gender',
            'email',
            'contact',
            'address'
        ]
    })
    res.status(200).send(users)
}

//3.get by id

const getOneUser = async (req, res) => {
    let id = req.params.id
    let users = await Player.findOne({ where: { id: id } })
    // if (!users) {
    //     res.status(404).json({
    //         message: 'Data not found'
    //     })
    // }
    res.status(200).send(users)
}

//4.put method

const updateUser = async (req, res) => {
    let id = req.params.id
    const users = await Player.update(req.body, { where: { id: id } });
    res.status(200).json({
        data: users,
        code: res.statusCode,
        message: 'success'
    })
}

//5.delete method

const deleteUser = async (req, res) => {
    let id = req.params.id
    await users.destroy({ where: { id: id } })
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
    login
};