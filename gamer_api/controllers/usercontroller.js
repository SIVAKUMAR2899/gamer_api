//const { player, player, player } = require('../models')
const { users } = require('../models');
const db = require('../models');
const { sign } = require('jsonwebtoken');
const { hashSync,genSaltSync,compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');

const Player = db.users

//1.post method

const addUser = async (req, res) => {
    console.log('hi');

    // let pwdHashed = bcrypt.hash( req.body.password, 10);
    const salt = genSaltSync(10);
    let info = {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        password:hashSync(req.body.password,salt),
        // created_at: "24-08-2022",
        // updated_at: "24-08-2022"
    }
    // const body = req.body;
    // const salt = genSaltSync(10);
    // body.password = hashSync(body.password,salt);
    console.log(req.body);
    const users = await Player.create(info)
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
    const { email,password } = req.body;
    let user = await Player.findOne({ where : { email : email}});
    if(!user){
        return res.json({
            success : 0,
            message : "invalid email"
        });
    }
    let userid = user.id;
        const result = compareSync(password,user.password);
        if(result){
            const newtoken = jwt.sign({ result: user},"asd1234",{expiresIn:3600});
            let email = req.params.email;
            let jsonwtoken =await Player.update({token:newtoken},{where: {id:userid}});

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
        // const jsonwtoken =await Player.update(
        //     {token: token},{where: {email:email}}
        // );
    
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