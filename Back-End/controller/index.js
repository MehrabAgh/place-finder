const GetCategory = require('../models/categories');
const Cities = require('../models/cities');
const getPlace = require('./getPlaces');
const userInfo = require('./userInfo');
const redis = require('redis');

const VerifyEmail = require("./tools-login/APIs/emailsenderAPI")

const client = redis.createClient();

(async() => {
    await client.connect()
})();


exports.index = (req, res) => {

    console.log(VerifyEmail("vinodevs.official@gmail.com", "wwwww"))
        // const _userInfo = await userInfo();
        // let currCity = "";
        // if (_userInfo != null)
        //     currCity = _userInfo.data.City;
        // else currCity = await client.get('cityCache');


    // const _places = await getPlace(currCity);
    // const _categories = await GetCategory();


    // res.json({ places: _places, userInfo: _userInfo, cities: Cities, categories: _categories })
}