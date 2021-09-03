const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


const User = require("../Models/user")
const Patient = require ("../Models/Patient")

const requireLoginUser = require("../MiddleWare/RequireLoginUser")



router.get('/Personal',requireLoginUser,(req,res)=> {
    
    User.find()
    .then(resultat=>{
        res.json(resultat)
    
    }).then((err)=>{

        console.log(err)
    })
    


})

router.get('/Patients',requireLoginUser,(req,res)=>{
    const data = []
    Patient.find({doctor:req.user._id})
    .populate("doctor",'_id first_name last_name')
    
    .then(result=>{
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]._id)
            data.push({ id: result[i]._id, first_name: result[i].first_name ,last_name:result[i].last_name, email: result[i].email, cin: result[i].cin, phone: result[i].phone, state: result[i].state, birthday: result[i].birthday,gender:result[i].gender,occupation:result[i].occupation ,
                doctorId:result[i].doctor._id,
                doctorfirstname:result[i].doctor.first_name,doctorlastname:result[i].doctor.last_name})
        }
        res.json(data)
    })
    .then ((err)=>{
        console.log(err)
    })
})


router.get('/Userdata',requireLoginUser,(req,res)=>{
    User.findOne({_id:req.user._id})
    .then(result=>{
        res.json(result)
    })
    .catch((err)=>{
        console.log(err)
    })
    
})


router.get('/allPatients',requireLoginUser,(req,res)=>{
    const data = []
    Patient.find()
    .populate("doctor",'_id first_name last_name')
    
    .then(result=>{
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]._id)
            data.push({ id: result[i]._id, first_name: result[i].first_name ,last_name:result[i].last_name, email: result[i].email, cin: result[i].cin, phone: result[i].phone, state: result[i].state, birthday: result[i].birthday,gender:result[i].gender,occupation:result[i].occupation ,
                doctorId:result[i].doctor._id,
                doctorfirstname:result[i].doctor.first_name,doctorlastname:result[i].doctor.last_name})
        }
        res.json(data)
    })
    .then ((err)=>{
        console.log(err)
    })
})

router.get('/Count',requireLoginUser,(req,res)=>{
        Patient.countDocuments({doctor:req.user._id})
        .then((result)=>{
            res.json(result)
        })

})

router.get('/Personalprofile/:id',requireLoginUser,(req,res)=>{
    User.findOne({_id:req.params.id})
    .then((result)=>{
        res.json(result)

    })
})


router.get('/Personalpatients/:id',requireLoginUser,(req,res)=>{
    Patient.find({doctor:req.params.id})
    .then((result)=>{
        res.json(result)
    })
})


router.delete('/Personalpatients/:id',async (req,res)=>{

    try{
            const patient =await  Patient.findById(req.params.id);

           await patient.deleteOne()
                res.status(200).json("the patient has been deleted")

           

        }catch(err){
            res.status(500).json(err)
        }

})












module.exports = router