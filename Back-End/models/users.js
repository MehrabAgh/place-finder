class User {
    constructor(id, firstname, lastname, phonenumber, email, typeuser, typecity) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.email = email;
        this.typeuser = typeuser;
        this.typecity = typecity;
    }

    starting(...params) {
        params.forEach((vars) => {
            console.log(vars)
        })
        return params
    }
}

module.exports = User;