const Usercontroller = require('../controllers/usercontroller');
const Skillcontroller = require('../controllers/skillcontroller');
const {checktoken} = require('../auth/checktoken');

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

router.get('/alluser',checktoken,Usercontroller.getAllUser)

router.get('/:id',checktoken,Usercontroller.getOneUser)

router.put('/:id',checktoken,Usercontroller.updateUser)

router.delete('/:id',checktoken,Usercontroller.deleteUser)

//skills

router.post('/addskill',Skillcontroller.addskills)

router.get('/get/allskill',Skillcontroller.getallskills)

router.get('/get/:sid',Skillcontroller.getoneskills)

router.put('/update/:sid',Skillcontroller.updateskills)

router.delete('/delete/:sid',Skillcontroller.deleteskills)

module.exports = router;