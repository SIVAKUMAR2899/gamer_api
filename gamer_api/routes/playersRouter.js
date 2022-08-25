const Usercontroller = require('../controllers/usercontroller')
const Skillcontroller = require('../controllers/skillcontroller')

const router = require('express').Router()

//User

router.post('/adduser',Usercontroller.addUser)

router.get('/alluser',Usercontroller.getAllUser)

router.get('/:id',Usercontroller.getOneUser)

router.put('/:id',Usercontroller.updateUser)

router.delete('/:id',Usercontroller.deleteUser)

//skills

router.post('/addskill',Skillcontroller.addskills)

router.get('/get/allskill',Skillcontroller.getallskills)

router.get('/get/:sid',Skillcontroller.getoneskills)

router.put('/update/:sid',Skillcontroller.updateskills)

router.delete('/delete/:sid',Skillcontroller.deleteskills)

module.exports = router;