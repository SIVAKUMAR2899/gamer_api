const { bonuses } = require('../models');
const db = require('../models');

const claimbonus = db.bonuses;

const daily_claim_bonus = async (req, res) => {
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() +1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    const body ={
        bonus_id:req.body.bonus_id,
        user_id:req.body.user_id,
        time:dateTime,
        upt_time:dateTime,
        bonus:req.body.bonus
    };
    const c_bonus = await claimbonus.create(body);
    if(c_bonus){
        res.status(200).json({
            code: res.statusCode,
            data: c_bonus,
            message: 'bonus claimed successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"bonus doesn't claim"
        });
    }
}

module.exports = {
    daily_claim_bonus
};