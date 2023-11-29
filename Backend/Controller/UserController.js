const express=require("express");
const mongoose=require("mongoose")
const model=require("../Model/UserModel");
const { use } = require("../Routes/UserRoute");


//create user 
exports.createuser=async(req,res)=>{
    try{
        const inputdata=req.body;
        const details=await model.create(inputdata);
        res.status(200).json({message:"user Created"})

    }
    catch(err){
        res.status(500).json({message:"details not found"})

    }
}
//get all users

exports.getusers=async(req,res)=>{
    try{
        let User;
         
      User= await model.find();
            res.status(200).json({User})
    }
    catch(error){
        console.log(error)

    }
}



//get user by id
exports.getUser=async(req,res)=>{
    let User;
    const id=req.params.id;
    try{
         User= await model.findById(id);
            res.status(200).json({User})
    }

    
    catch{
        res.status(500).json({message:"user not found"})
    }

}

//update user by id
exports.UpdateUser=async(req,res)=>{
    let User;
    const id=req.params.id;
    const {name,age,email}=req.body;

    try{
        User= await model.findByIdAndUpdate(id,{
           name,age,email

        });
       User= await User.save().then(()=>res.json({message:"data updated"}))
    }
    catch{
        res.status(500).json({message:"details wrong"})
    }

}

//delete user by id

exports.DeleteUser=async(req,res)=>{
    let User ;
    const id=req.params.id;
    const {name,age,email}=req.body;
    try{
       await model.findByIdAndDelete(id).then(()=>res.status(201).json({message:"data deleted successfully"}))
    }

    catch{
        res.status(500).json({message:"details wrong"})
    }
}