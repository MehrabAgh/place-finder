const GetCategory = require('../models/categories');
const { Cities, Provinces } = require('../models/cities');
const getPlace = require('./placeCollection/getPlaces');
const userInfo = require('./userCollection/userInfo');
const redis = require('redis');

const client = redis.createClient();

(async() => {
    await client.connect()
})();


exports.index = async(req, res) => {

    const _userInfo = await userInfo();
    let currCity = "";
    if (_userInfo != null)
        currCity = _userInfo.data.City;
    else currCity = await client.get('cityCache');

    const getCities = await Cities();
    const getProvinces = await Provinces();
    const _places = await getPlace(1);
    const _categories = await GetCategory();


    res.json({ places: _places, userInfo: _userInfo, cities: getCities, categories: _categories, provinces: getProvinces })
}