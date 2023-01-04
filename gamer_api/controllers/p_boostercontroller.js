const { booster_purchases } = require('../models');
const db = require('../models');

const Booster = db.booster_purchases;

const purchasebooster = async (req, res) => {
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() +1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    let etime =current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + (current.getDate()+7)+ ' ' + cTime;
    console.log(etime);

    const body ={
        id:req.body.id,
        user_id:req.body.user_id,
        booster_id:req.body.booster_id,
        from_time:dateTime,
        exp_time:etime,
        status:req.body.status
    };
    const booster = await Booster.create(body);

    if(booster){
        res.status(200).json({
            code: res.statusCode,
            data: booster,
            message: 'booster saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"booster doesn't saved"
        });
    }
}

module.exports = {
    purchasebooster
};