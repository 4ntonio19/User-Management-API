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

const updateUser = (req, res) =>{
    const id = req.params.id;
    const modifiedUser = req.body;
    modifiedUser.id = id;
    userService.update(modifiedUser).then(() =>{
        res.sendStatus(200);
    }).catch(error =>{
        res.status(400).send(error);
    })
}

const removeUser = (req, res) =>{
    const id = req.params.id;
    userService.remove(id).then(() =>{
        res.sendStatus(200);
    }).catch(error =>{
        res.status(400).send(error);
    })
}
module.exports = {listUsers, listUserById, createUser, updateUser, removeUser};