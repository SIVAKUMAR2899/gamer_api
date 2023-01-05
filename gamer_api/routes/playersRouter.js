const Usercontroller = require('../controllers/usercontroller');
const P_dicecontroller = require('../controllers/purchasedicecontroller');
const P_boostercontroller = require('../controllers/p_boostercontroller');
const dailybonuscontroller = require('../controllers/dailybonuscontroller');
const claimbonuscontroller = require('../controllers/claimbonuscontroller');

const {checktoken} = require('../auth/checktoken');
const { verifytoken } = require('../auth/verifytoken');

const router = require('express').Router()


router.post('/adduser',Usercontroller.addUser)

router.post('/login',Usercontroller.login)

router.post('/updatePassword',Usercontroller.updatePassword)

router.get('/alluser',checktoken,Usercontroller.getAllUser)

router.get('/:user_id',checktoken,verifytoken,Usercontroller.getOneUser)

router.put('/:user_id',checktoken,verifytoken,Usercontroller.updateUser)

router.delete('/:user_id',checktoken,verifytoken,Usercontroller.deleteUser)

router.post('/purchasedice',P_dicecontroller.purchasedice)

router.post('/purchasebooster',P_boostercontroller.purchasebooster)

router.post('/dailybonus',dailybonuscontroller.dailybonus)

router.post('/claimbonus',claimbonuscontroller.daily_claim_bonus)

module.exports = router;