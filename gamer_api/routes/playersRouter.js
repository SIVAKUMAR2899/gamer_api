const Usercontroller = require('../controllers/usercontroller');
const Skillcontroller = require('../controllers/skillcontroller');
const {checktoken} = require('../auth/checktoken');
const { verifytoken } = require('../auth/verifytoken');

const router = require('express').Router()

// router.get('/', (req, res)=>{

//     res.json({
//         code: 200, 
//         Message: "Success"
//     })
// });
//User

router.post('/adduser',Usercontroller.addUser)

router.post('/login',Usercontroller.login)

router.post('/updatePassword',Usercontroller.updatePassword)

router.get('/alluser',Usercontroller.getAllUser)

router.get('/:user_id',Usercontroller.getOneUser)

router.put('/:user_id',Usercontroller.updateUser)

router.delete('/:user_id',Usercontroller.deleteUser)

//skills

router.post('/addskill',Skillcontroller.addskills)

router.get('/get/allskill',Skillcontroller.getallskills)

router.get('/get/:sid',Skillcontroller.getoneskills)

router.put('/update/:sid',Skillcontroller.updateskills)

router.delete('/delete/:sid',Skillcontroller.deleteskills)

module.exports = router;