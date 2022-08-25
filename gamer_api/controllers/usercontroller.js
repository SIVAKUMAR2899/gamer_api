//const { player, player, player } = require('../models')
const { users } = require('../models');
const db = require('../models')

const Player = db.users

//1.post method

const addUser = async (req, res) => {
    console.log('hi', req.body);
    let info = {
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        created_at: "24-08-2022",
        updated_at: "24-08-2022"
    }
    const users = await Player.create(info)
    res.status(200).json({
        code: res.statusCode,
        data: users,
        message: 'success'
    });
    console.log(users)
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
    if (!users) {
        res.status(404).json({
            message: 'Data not found'
        })
    }
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
    deleteUser
};