const Usercontroller = require('../controllers/usercontroller');
const Skillcontroller = require('../controllers/skillcontroller');
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

//skills

router.post('/addskill',Skillcontroller.addskills)

router.get('/get/allskill',Skillcontroller.getallskills)

router.get('/get/:sid',Skillcontroller.getoneskills)

router.put('/update/:sid',Skillcontroller.updateskills)

router.delete('/delete/:sid',Skillcontroller.deleteskills)

module.exports = router;