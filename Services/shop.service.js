const Shop = require('../Models/shop.model');

// post method
module.exports.create = shop => {
    return Shop.create(shop);
}

// get by Id
module.exports.getById = id => {
    return Shop.findById(id)
}

// get all
module.exports.getAll = () => {
    return Shop.find({});
}

// update by Id
module.exports.updateById = id => {
    return Shop.updateOne({name:'riya fast food'}, {name: 'fast food'})
}

// delete by Id
module.exports.deleteById = id => {
    return Shop.deleteOne({_id:id})
}