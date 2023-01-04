const { daily_bonus_transactions } = require('../models');
const db = require('../models');

const BONUS = db.daily_bonus_transactions;

const dailybonus = async (req, res) => {
    // const body = req.body;
    // const bonus = await BONUS.create(body);

    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() +1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    const body ={
        id:req.body.id,
        user_id:req.body.user_id,
        bonus:req.body.bonus,
        dates:dateTime
    };
    const bonus = await BONUS.create(body);
    if(bonus){
        res.status(200).json({
            code: res.statusCode,
            data: bonus,
            message: 'bonus saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"bonus doesn't saved"
        });
    }
}

module.exports = {
    dailybonus
};