const connection = require('./connection');

function getUsers() {
    return new Promise((resolve, reject) => {
        connection.execute('SELECT * FROM users', (error, results) => {
            if (error) {
                reject(error);
            } else {
                const jsonResults = JSON.stringify(results);
                resolve(jsonResults);
            }
        });
    });
}

function getUserById(id){
    return new Promise((resolve, reject) => {
        connection.execute(`SELECT * FROM users WHERE id = ?`, [id], (error, results) =>{
            if(error){
                reject(error);
            }if(results.length === 0){
                resolve(false);
            }else{
                const jsonUserDB = JSON.stringify(results[0], null);
                resolve(jsonUserDB);
            }
        })
    })
}

function createUser(body){
    return new Promise((resolve, reject) =>{
            connection.execute(`INSERT INTO users(fullName, email, password, birthDay) values (?, ?, ?, ?)`,
            [body.fullName, body.email, body.password, body.birthDay], (err) =>{
                    if (err) {
                        reject(err);
                    }else{
                        resolve(true);
                    }
                })
        })
}
module.exports = {getUsers, getUserById, createUser};