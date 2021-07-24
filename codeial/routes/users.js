const express=require('express');

const router=express.Router();

const userController=require('../controllers/user_controllers');

router.post('/create',userController.create);
router.get('/delete',userController.destroy);
module.exports = router;
