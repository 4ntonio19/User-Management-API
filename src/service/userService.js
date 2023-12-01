const {getUsers, getUserById } = require('../controllers/userController')

async function listUsers(){
    try{
        const results = await getUsers();
        return JSON.parse(results);
    }catch(error){
        console.log("Erro ao obter o usuário.");
    }
}

async function listUserById(id){
    try{
        const results = await getUserById(id);
        return JSON.parse(results);
    }catch(error){
        console.log("Erro no listUserById do service");
    }
}

module.exports = {listUsers, listUserById};