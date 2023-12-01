const getUsers = require('../controllers/userController')

async function listUsers(){
    try{
        const results = await getUsers();
        return JSON.parse(results);
    }catch(error){
        console.log("Erro ao obter o usuário.");
    }
}

module.exports = listUsers();