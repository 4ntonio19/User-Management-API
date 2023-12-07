const userRepository = require('../repository/userRepository');

const list = () =>{
    return userRepository.getUsers();
}

const listById = (id) => {
    return userRepository.getUserById(id);
}

const create = (body) => {
    return userRepository.createUser(body);
}

const update = (body) => {
    const id = body.id;
    console.log(body);
    return userRepository.updateUser(id, body);
}

const remove = (id) =>{
    return userRepository.removeUser(id);
}

module.exports = {
    list,
    listById,
    create,
    update,
    remove
}