const userService = require('../service/userService')

const listUsers = (req, res) =>{
    userService.list().then((user) =>{
        res.status(200).send(user);
    }).catch(error=>{
        res.status(404).send(error);
    })
}

const listUserById = (req, res) => {
    userService.listById(req.params.id).then(user => {
    res.status(200).send(user);
    }).catch(error =>{
    res.status(404).send('user not found');
    })
}

const createUser = (req, res) => {
    userService.create(req.body).then(() =>{
        res.status(201).send('created user')
    }).catch(error => {
        console.log(error);
        res.status(401).send(error);
    })
}
module.exports = {listUsers, listUserById, createUser};