const models = require('../models')

exports.getAllProducts = async (req, res) => {
    const product = await models.Product.findAll({})
    res.json(products)
}