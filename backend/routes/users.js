const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user')

router.post("/",async (req,res)=>{
    try{        
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(409).send({message: "User with given email already exists!"});
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(password,salt);        

        await new User({email,password: hashPassword}).save();
        res.status(201).send({message: "User Created Successfully"});
    }catch(e){
        res.status(500).send({message: "Internal Server Error"});        
    }
})

module.exports = router;