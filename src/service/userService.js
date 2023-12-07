const userRepository = require('../repository/userRepository')

const list = () =>{
    return userRepository.getUsers();
}

const listById = (id) => {
    return userRepository.getUserById(id);
}

const create = (body) => {
    return userRepository.createUser(body);
}

module.exports = {
    list,
    listById,
    create
}