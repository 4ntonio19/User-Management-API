const express = require('express')
const router = express.Router();
const {listUsers, listUserById} = require('../service/userService')

router.get('/users', async(req, res) =>{
    try{
        const users = await listUsers();;
        res.status(200).json(users);
    }catch(error){
        console.log(error);
        res.status(404).send('erro ao acahar os usuarios.')
    }
})

router.get('/users/:id', async(req, res) =>{
    try {
        const user = await listUserById(req.params.id);
        res.status(201).json(user);
    }catch(error){
        console.log(error);
        res.status(404).send('Erro ao encontrar o usuario');
    }
})

module.exports = router;