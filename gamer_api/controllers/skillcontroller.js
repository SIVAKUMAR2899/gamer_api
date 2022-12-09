const { skills } = require('../models')
const db = require('../models')

const Playerskill = db.skills

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

//3.get skills by id
const getoneskills = async (req, res) => {
    let sid = req.params.sid
    let skills = await Playerskill.findOne({ where: { sid: sid } })
    let skillid = skills.id;
    console.log(skillid);
    if (!skills) {
        res.status(404).json({
            message: 'Data not found'
        })
    }
    res.status(200).send(skills);
}

//4.update skills
const updateskills = async (req, res,err) => {
    console.log("UpdateSkill: ", req.body);

    let sid = req.params.sid
    let skills = await Playerskill.update(req.body, { where: { sid: sid } });
        res.status(200).json({
            code: res.statusCode,   
            message: 'Successfully updated'
        })
}

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