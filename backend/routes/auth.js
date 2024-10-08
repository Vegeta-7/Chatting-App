const router = require('express').Router();
const { User } = require("../models/user");
const Joi = require("joi")
const bcrypt = require("bcrypt")

router.post("/",async(req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(401).send({message: "Invalid Email or Password"});
        }
        const validPassword = await bcrypt.compare(
            req.body.password,user.password
        );
        if(!validPassword){
            return res.status(401).send({message: "Invalid Email or Password"});
        }
        const token = user.generateAuthToken();
        res.status(200).send({data: token, message: "Logged In Successfully"});
    } catch (error) {
        res.status(500).send({message: "Internal Server Error"});
    }
})

const validate = (data) => {
    const schema=Joi.object({
        email: Joi.string().email().required().unique().label("Email"),
        password: Joi.string().password().required().label("Password")
    })
    return schema.validate(data);
}

module.exports = router;