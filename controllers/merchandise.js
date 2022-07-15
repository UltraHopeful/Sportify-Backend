const { request, response } = require('express')
const { v4: uuidv4 } = require('uuid');
var Merchandise = require('../models/merchandise')

//display all merchandise

exports.displayMerchandise = (request, response) => {
    Merchandise.find()
        .then(data => {
            return response.status(201).json({
                message: "Products displayed",
                success: true,
                data: productDetails
            })
        })
        .catch(error => {
            return response.status(500).json({
                message: "Internal server error",
                success: false
            })
        })
}

// add product in the database
exports.addMerchandise = (request, response) => {
    
    if (!request.body) {
        return response.status(400).send({
            success: false,
            message: "Content is missing"
        })
    }

    const productDetails = new Merchandise({
        product_id: req.body.product_id,
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        product_image: req.body.product_image

    })

    productDetails.save(productDetails)
        .then(data => {
            return response.status(201).json({
                message: "Product added to database",
                success: true,
                data: productDetails
            })
        })
        .catch(error => {
            return response.status(500).json({
                message: "Internal server error",
                success: false
            })
        })
}

// update exisiting Merchandise 
exports.updateMerchandise = (request, response) => {
    if (!request.body) {
        return response.status(400).send({
            success: false,
            message: "Content is missing"
        })
    }

    const product_id = request.params.id;
    Merchandise.findOneAndUpdate({ id: product_id }, request.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return respond.status(404).send({
                    success: false,
                    message: "No product found "
                })
            } else {
                return respond.status(200).json({
                    message: "Product updated",
                    success: true
                })
            }
        })
        .catch(error => {
            return respond.status(500).json({
                message: "Internal server error",
                success: false
            })
        })
}   