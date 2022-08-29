const { skills } = require('../models')
const db = require('../models')

const Playerskill = db.skills

/**
 * @swagger
 * components:
 *    schemas:
 *       skills:
 *          type: object
 *          required:
 *              - sid
 *              - id
 *              - matches
 *              - levels
 *              - coins
 *              - energy
 *              - createdAt
 *              - updatedAt
 *          properties:
 *             sid:
 *                type : string
 *                description : "the auto-generated id of the player"
 *             id:
 *                type : string
 *                description : "the id of the player"
 *             matches:
 *                type: string
 *                description : "total matches played by player"
 *             levels:
 *                type : string
 *                description : "in each player finished levels"
 *             coins:
 *                type : string
 *                description : "total of each player had coins"
 *             energy:
 *                type : string
 *                description : "the energy oh players had"
 *             createdAt:
 *                type : string
 *                description : "null"
 *             updatedAt: 
 *                 type : string
 *                 description : (null)
 *          example:
 *              sid : 1,
 *              id :1,
 *              matches : 10,
 *              levels : 2,
 *              coins : 500,
 *              energy : 4,
 *              createdAt : null,
 *              updatedAt : null
 */

/**
 * @swagger
 * /skills:
 *  post:
 *     summary : Create a new skills
 *     requestbody:
 *           required : true
 *           content:
 *               application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/skills'
 *     responses:
 *       200:
 *         description : The player was succesfully created
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schema/skills'
 */

//1.create skills
const addskills = async (req, res) => {
    let skilldetail = {
        sid: req.body.sid,
        id: req.body.id,
        matches: req.body.matches,
        levels: req.body.levels,
        coins: req.body.coins,
        energy: req.body.energy
    }
    const skills = await Playerskill.create(skilldetail)
    res.status(200).json({
        code: res.statusCode,
        data: skills,
        message: 'Created successfuly'
    });
    console.log(skills)
}

/**
 * @swagger
 * /skills:
 *    get:
 *      summary : Return the list of all skills
 *      responses:
 *           200:
 *              description: The list of the skills
 *              content:
 *                 application/json:
 *                     schema:
 *                        type: array
 *                        $ref: '#/components/schema/skills'
 */

//2.get all id skills
const getallskills = async (req, res) => {
    let skills = await Playerskill.findAll({
        attributes: [
            'sid',
            'id',
            'matches',
            'levels',
            'coins',
            'energy'
        ]
    })
    res.status(200).send(skills)
}

/**
 * @swagger
 * /skills/{sid}:
 *   get:
 *      summary : Get the skills by sid
 *      parameters:
 *          - in : path
 *            name : sid
 *            schema:
 *               type:string
 *            required : true
 *            description : The skills id
 *      responses:
 *          200:
 *             description : The skills description by id
 *             contents:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/skills'
 *          404:
 *             description : The skills not found
 */

//3.get skills by id
const getoneskills = async (req, res) => {
    let sid = req.params.sid
    let skills = await Playerskill.findOne({ where: { sid: sid } })
    if (!skills) {
        res.status(404).json({
            message: 'Data not found'
        })
    }
    res.status(200).send(skills);
}

/**
 * @swagger
 * /skills/{sid}:
 *  put:
 *     summary : Update the skills by the sid
 *     parameters:
 *       - in : path
 *         name : sid
 *         schema:
 *             type : string
 *         required : true
 *         description : The skills sid
 *     requestBody:
 *       required : true
 *       content:
 *         application/json:
 *            schema:
 *              $ref: '#/components/schemas/skills'
 *     responses:
 *        200:
 *          description : The skills was sussessfully updated
 *          content:
 *             application/json:
 *                schema:
 *                  $ref: '#/components/schemas/skills'
 */

//4.update skills
const updateskills = async (req, res,err) => {
    console.log("UpdateSkill: ", req.body);

    let sid = req.params.sid
    let skills = await Playerskill.update(req.body, { where: { sid: sid } })
    // if (err) {
    //     res.status(500).json({
    //         code: res.statusCode,
    //         message: 'failed'
    //     })
       
    // }
    // else {
        res.status(200).json({
            code: res.statusCode,
            // data: skills,
            message: 'Successfully updated'
        })
    // }
}

/**
 * @swagger
 * /skills/{sid}:
 *  delete:
 *       summary : Remove the skills sid
 *       parameters:
 *           - in : path
 *             name : sid
 *             schema:
 *               type : string
 *             required : true
 *             description : The skills sid
 *       responses:
 *         200:
 *           description : The skills id was successfully deleted
 */

//5.delete skills
const deleteskills = async (req, res) => {
    let sid = req.params.sid
    await skills.destroy({ where: { sid: sid } })
    res.status(200).json({
        code: res.statusCode,
        message: 'Deleted successfully'
    });
}

module.exports = {
    addskills,
    getallskills,
    getoneskills,
    updateskills,
    deleteskills
};