const connection = require('./connection');

function getUsers() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT id, fullName, email, birthDay FROM users'
        connection.execute(query, (error, results) => {
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
        const query ='SELECT id, fullName, email, birthDay FROM users WHERE id = ?';
        connection.execute(query, [id], (error, results) =>{
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
        const query = 'INSERT INTO users(fullName, email, password, birthDay) values (?, ?, ?, ?)';
            connection.execute(query,[body.fullName, body.email, body.password, body.birthDay], (err) =>{
                    if (err) {
                        reject(err);
                    }else{
                        resolve(true);
                    }
                })
        })
}

function updateUser(id, body){
    return new Promise((resolve, reject) =>{
        const query = 'UPDATE users SET fullName = ?, email = ?, password = ? WHERE id = ?';
        connection.execute(query, [body.fullName, body.email, body.password, id], (error) =>{
            if(error){
                reject(error);
            }else{
                resolve(true);
            }
        })
    })
}

function removeUser(id){
    return new Promise((resolve, reject) =>{
        const query = 'DELETE FROM users WHERE id = ?';
        connection.execute(query, [id], (error)=>{
            if(error){
                reject(error);
            }else{
                resolve(true);
            }
        })
    })
}
module.exports = {getUsers, getUserById, createUser, updateUser, removeUser};