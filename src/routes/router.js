const express = require('express')
const router = express.Router();
const listUsers = require('../service/userService')

router.get('/users', async(req, res) =>{
    try{
        const users = await listUsers;
        res.status(200).json(users);
    }catch(error){
        console.log(error);
        res.status(404).send('erro ao acahar os usuarios.')
    }
})

module.exports = router;