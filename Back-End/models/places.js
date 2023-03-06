class Place {
    constructor(NamePlace, PhoneNumber, Description, Picture, Category, City) {
        this.NamePlace = NamePlace;
        this.PhoneNumber = PhoneNumber;
        this.Description = Description;
        this.Picture = Picture;
        this.Category = Category;
        this.City = City;
    }

    starting(...params) {
        params.forEach((vars) => {
            console.log(vars)
        })
        return params
    }
}

module.exports = Place;