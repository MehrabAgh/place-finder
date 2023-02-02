class User {
    constructor(id, firstname, lastname, phonenumber, typeuser, typecity) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
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