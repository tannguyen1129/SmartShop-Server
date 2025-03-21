const { validationResult } = require('express-validator')
const models = require('../models')



exports.getAllProducts = async (req, res) => {
    const product = await models.Product.findAll({})
    res.json(products)
}

exports.create = async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const msg = error.array().map(error => error.msg).join('')
        return res.status(422).json({message: msg, success: false})
    }

    const { name, description, price, photo_url, user_id } = req.body

    try {
        const newProduct = await models.Product.create({
            name: name,
            description: description,
            price: price,
            photo_url: photo_url,
            user_id: user_id 
        })

        res.status(201).json({success:true, product: newProduct})

    } catch(error) {
        res.status(500).json({message: "Internal server error", success: false});
    }

}