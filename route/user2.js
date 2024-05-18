const express = require("express")
const userRouter = express.Router();
const {User} =require('../model/user')
const bcrypt = require('bcryptjs')

function createHash(password){
    const salt=bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt)
}
async function comparePassword(password, hashPassword){
    return await bcrypt.compare(password,hashPassword)
}

userRouter.get('/list',async(req,res)=>{
    try {
        const users= await User.find();
        if(users.length){
            return res.json({
                message:"no users found"
            })
        }
        return res.json({
            users
        })
    } catch (error) {
        console.log("error,"+error)
    }
})
userRouter.post('/signup',async (req,res)=>{
    try{
        const data = req.body;
        if(data.email === undefined || data.password === undefined || data.name === undefined){
            return res.status(400).json({
                message: "name, email and password are required"
            })
        }    
        const user = await User.findOne({email:data.email});
        if(user){
            return res.status(400).json({
                message:"user already exists"
            })
        }
        const hashPassword = createHash(data.password)
        const newUser = await User.create({
            name:data.name,
            email:data.email,
            password:hashPassword
        })
        //authentication logic
        return res.status(201).json({
            message: "user created successfully",
            token:"token"
        });
    }catch(error){
        console.log(error)
    }
})
userRouter.post('/signin',async (req,res)=>{
    try{
        const data =req.body;
        if(data.email ===undefined || data.password ===undefined){
            return res.status(400).json({
                message:"email and password are required"
            })
        }
        const user = await User.findOne({email:data.email})
        if(!user){
            return res.json({
                message:"user does not exists"
            })
        }
        const result = await comparePassword(data.password,user.password)
        if(!result){
            return res.json({
                message:"password incorrect"
            })
        }
        res.status(200).json({
            message:"signin successful",
            token:"token"
        })
    }catch(error){
        console.log(error);
    }
})
// router.put('/update',(req,res)=>{
//     const data =req.body;
//     //validating the data
//     if(data.email ===undefined || data.password ===undefined || data.name === undefined){
//         return res.status(400).json({
//             message:"name, email and password are required"
//         })
//     }
//     // user exists 
//     const user = users.find(user => user.email === data.email);
//     if(!user){
//         return res.status(400).json({
//             message:"user does not exists"
//         })
//     }
//     // authentic user 
//     if(user.password !== data.password){
//         return res.status(400).json({
//             message:"password does not match"
//         })
//     }
//     //deleting old user data
//     users.filter(user => user.email !== data.email);
//     //pushing back the new data
//     users.push(data);
//     return res.status(200).json({
//         message:"user logged in successfully",
//         data
//     })
// })
// router.delete('/delete',(req,res)=>{
//     //check the data is correct or not
//     if(req.body.email == undefined || req.body.password == undefined){
//         return res.status(400).json({
//             message:"email and password is required"
//         })
//     }
//     //check if the user is present or not
//     const user = users.find(user => user.email == req.body.email);
//     // check if the password is correct or not
//     if(user.password !== req.body.password){
//         return res.status(400).json({
//             message:"password does not match"
//         })
//     }
//     // deletes the user from data base
//     users = users.filter(user => user.email !== req.body.email);
    
//     // sends back the response
//     return res.status(200).json({
//         message: "user deleted sucessfully"
//     })
// })

module.exports = {userRouter};