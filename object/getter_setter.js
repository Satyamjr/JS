class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}Satyam`
    }

    set password(value){
        this._password = value
    }
}

const Satyam = new User("h@Satyam.ai", "abc")
console.log(Satyam.email);