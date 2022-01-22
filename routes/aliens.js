const express = require ('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req,res) => {
    //console.log('Get request')
    //res.send('Get Request')

    try{
            const aliens = await Alien.find()
            res.json(aliens)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {

    try{
            const alien = await Alien.findById(req.params.id)
            res.json(alien)
    }catch(err){
        res.send('Invalid user id.')
        //return res.status(400).send({message: "Invalid User ID."});
    }
})

router.get('/getbyname/:name', async(req,res) => {
 //console.log('name')
    try{
        //console.log (req.params.name)
            const alien = await Alien.find(req.params)
            //console.log (Alien)
            res.json(alien)
    }catch(err){
        res.send('Invalid user name.')
    }
})

router.post('/',async(req,res) => {
    //console.log (req.body)
    
    const alien = new Alien( {
        name: req.body.name,
        tech: req.body.tech,
        age: req.body.age
    })
    //console.log (alien)
    try{
        res.send('Data Succefully Added.')
       // console.log('server started')
        const a1 = await alien.save()
        res.json(a1)

    }
    catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        alien.name = req.body.name,
        alien.tech = req.body.tech,
        alien.age = req.body.age
        const a1 = await alien.save()
        //res.json(a1)
        res.send('Data Succefully Updated.')
    }catch(err){
        res.send('Error ')
    }
})

router.delete('/:id',async(req,res) =>{
    try{
        const alien = await Alien.findByIdAndRemove(req.params.id)
        res.send('Data Succefully Deleted.')
        //res.json({data:'Removed Succesfully.'})
    }catch(err){
        res.send('Invalid user id. ')
    }
})

router.delete('/getbyname/:name',async(req,res) =>{
    try{
        const alien = await Alien.findOneAndRemove(req.params)
        res.send('Data Succefully Deleted.')
        //res.json({data:'Removed Succesfully.'})
    }catch(err){
        res.send('Invalid user name. ')
    }
})

module.exports = router

