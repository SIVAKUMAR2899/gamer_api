const { dice_purchases } = require('../models');
const db = require('../models');

const DICE = db.dice_purchases;

const purchasedice = async (req, res) => {
    const body = req.body;
    const dice = await DICE.create(body);
    if(dice){
        res.status(200).json({
            code: res.statusCode,
            data: dice,
            message: 'dice saved successfully'
        });
    }else{
        return res.json({
            status:0,
            message:"dice doesn't saved"
        });
    }
}

module.exports = {
    purchasedice
};