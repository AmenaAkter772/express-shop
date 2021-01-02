const shopService = require('../Services/shop.service');

// post method
module.exports.create = async (req, res) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop)
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'something went wrong' })
    }
}

//get by Id
module.exports.getById = async (req, res) => {
    try {
        const getShopItemById = await shopService.getById(req.params.id);
        return res.status(200).json(getShopItemById)
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'could not find your item' })
    }
}

//get all
module.exports.getAll = async (req, res) => {
    try {
        const getAllShopItem = await shopService.getAll(res.body);
        return res.status(200).json(getAllShopItem);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'something went wrong'})
    }
} 

// Update by Id
module.exports.updateById = async (req, res) => {
    try {
        const update = await shopService.updateById(req.params.id);
        return res.status(200).json(update);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'something went wrong'})
    }
}

//delete by id
module.exports.deleteById = async (req, res) => {
    try {
        const deleteData = await shopService.deleteById(req.params.id);
        return res.status(200).json(deleteData)
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'something went wrong'})
    }
}
