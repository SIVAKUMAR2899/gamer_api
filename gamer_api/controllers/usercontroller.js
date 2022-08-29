//const { player, player, player } = require('../models')
const { users } = require('../models');
const db = require('../models')

const Player = db.users

/**
 * @swagger
 * components:
 *    schemas:
 *       users:
 *          type: object
 *          required:
 *              - id
 *              - firstname
 *              - lastname
 *              - age
 *              - gender
 *              - email
 *              - contact
 *              - address
 *              - createdAt
 *              - updatedAt
 *          properties:
 *             id:
 *                type : string
 *                description : "the id of the player"
 *             firstname:
 *                type: string
 *                description : "the firstname of player"
 *             lastname:
 *                type : string
 *                description : "the lastname of player"
 *             age:
 *                type : string
 *                description : "the age of player"
 *             gender:
 *                type : string
 *                description : "the gender og player"
 *             email:
 *                type : string
 *                description : "the mail id of player"
 *             contact:
 *                type : string
 *                description : "the contact num of player"
 *             address:
 *                type : string
 *                description : "the addressof player"
 *             createdAt:
 *                type : string
 *                description : "null"
 *             updatedAt: 
 *                 type : string
 *                 description : (null)
 *          example:
 *              id :1,
 *              firstname : mani,
 *              lastname : kandan,
 *              age : 25,
 *              gender : male,
 *              email : abc@gmail.com,
 *              contact : 21541,
 *              address : karur,
 *              createdAt : null,
 *              updatedAt : null
 */

/**
 * @swagger
 * /users:
 *  post:
 *     summary : Create a new player
 *     requestbody:
 *           required : true
 *           content:
 *               application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/players'
 *     responses:
 *       200:
 *         description : The player was succesfully created
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schema/players'
 */

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

/**
 * @swagger
 * /users:
 *    get:
 *      summary : Return the list of all players
 *      responses:
 *           200:
 *              description: The list of the players
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: array
 *                        $ref: '#/components/schema/players'
 */

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

/**
 * @swagger
 * /users/{id}:
 *   get:
 *      summary : Get the player br id
 *      parameters:
 *          - in : path
 *            name : id
 *            schema:
 *               type:string
 *            required : true
 *            description : The player id
 *      responses:
 *          200:
 *             description : The player description by id
 *             contents:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/players'
//  *          404:
//  *             description : The player not found
 */


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

/**
 * @swagger
 * /users/{id}:
 *  put:
 *     summary : Update the player by the id
 *     parameters:
 *       - in : path
 *         name : id
 *         schema:
 *             type : string
 *         required : true
 *         description : The player id
 *     requestBody:
 *       required : true
 *       content:
 *         application/json:
 *            schema:
 *              $ref: '#/components/schemas/players'
 *     responses:
 *        200:
 *          description : The player was sussessfully updated
 *          content:
 *             application/json:
 *                schema:
 *                  $ref: '#/components/schemas/players'
 */

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

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *       summary : Remove the player id
 *       parameters:
 *           - in : path
 *             name : id
 *             schema:
 *               type : string
 *             required : true
 *             description : The players id
 *       responses:
 *         200:
 *           description : The player id was successfully deleted
 *         404:
 *           description : The player was not found
 */

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