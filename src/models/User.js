module.exports = class User {
    constructor(id, name, email, birthday, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.password = password;
    }
}