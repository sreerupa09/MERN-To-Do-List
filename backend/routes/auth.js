const router=require('express').Router();
const User=require('../models/user');
const bcrypt=require('bcryptjs');

//SIGN UP
router.post('/register', async(req,res) => {
    try
    {
        const {email,username,password}=req.body;
        const hashPassword=bcrypt.hashSync(password); 
        const user=new User({email,username,password:hashPassword});
        const existing=await User.findOne({email});
        if (existing) return res.status(400).json({msg:'User already exists'});
        await user.save();
        res.status(200).json({ user:user });
        //await  user.save().then(() => res.status(200).json({ user:user }));  
    }
    catch(error)
    {
        console.log(error);
        //res.status(400).json({ message: "User already exists" });
        res.status(500).json({ message: "Something went wrong" });
        
    }
});

//SIGN IN
router.post('/login', async(req,res) => {
    try
    {
        const user=await User.findOne({email: req.body.email});
        if(!user)
            return res.status(400).json({message: "Please Sign Up First" });
        const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password); 
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Password incorrect" });
        const {password, ...others}=user._doc;
        res.status(200).json({others});
    }
    catch(error)
    {
        console.log(error);
        //res.status(400).json({ message: "User already exists" });
        res.status(500).json({ message: "Something went wrong" });
        
    }
});

module.exports=router;