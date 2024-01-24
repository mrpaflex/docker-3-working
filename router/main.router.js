const {db} = require('../config/db.config');

const express = require('express');
const router = express.Router();


router.get('/', async (req, res)=>{
   try {
    const user = await db.collection('dockertest').find().toArray();
    res.status(200).json({user: ` few off my wea df all user now not a joke ${user}`})
   } catch (error) {
    console.log(error)
   }
})

router.post('/post', async (req, res)=>{
    const {fullname, username} = req.body;

   const user = await db.collection('dockertest').insertOne({
    fullname,
    username
   });

   res.status(200).json({
    msg: "created"
   })
    
})

module.exports = {router}