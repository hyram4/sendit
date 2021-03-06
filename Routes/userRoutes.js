const express=require('express')
const router= express.Router()


const userController=require('../controllers/userControllers')

router.post('/login',userController.login)
router.get('/',userController.getUsers)
router.get('/:id',userController.getAUser)
router.post('/',userController.createUser)
router.delete('/:id',userController.deleteUser)
router.put('/:id',userController.updateUser)





module.exports=router;