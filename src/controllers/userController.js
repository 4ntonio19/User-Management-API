const connection = require('../repository/connection');

function getUsers(){
    return new Promise((resolve, reject) => {
        connection.execute('SELECT * FROM users', (err, results)=>{
            if(err){
                reject(err)
            }else{
                const jsonResults = JSON.stringify(results.map(item =>{
                    return item;
                }), null);
                resolve (jsonResults);
            }
        })
    })
}

function getUserById(params){
    return new Promise((resolve, reject) => {
        connection.execute(`SELECT * FROM users WHERE id = ${params}`, (err, results) =>{
            if(err){
                reject(err);
            }else{
                const jsonResults = JSON.stringify(results[0], null);
                resolve(jsonResults);
            }
        })
    })
}
module.exports = {getUsers, getUserById};