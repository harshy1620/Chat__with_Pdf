const express = require('express');
const router=express.Router();

const userController=require('../controller/user_controller');

router.get('/',userController.home);
router.post("/createpdf",userController.createPdf);
// http://localhost:2000/createpdf





module.exports=router;