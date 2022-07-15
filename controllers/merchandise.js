const { request, response } = require('express')
const { v4: uuidv4 } = require('uuid');
var Merchandise = require('../models/merchandise')

//display all merchandise

exports.displayMerchandise = (request, response) => {
    Merchandise.find()
        .then(data => {
            console.log(data)
            return response.status(201).json({
                message: "Products displayed",
                success: true,
                data: data
            })
        })
        .catch(error => {
            console.log(error)
            return response.status(500).json({
                message: "Internal server error",
                success: false
            })
        })
}

// add product in the database
exports.addMerchandise = async (request, response) => {
    
    if (!request.body) {
        return response.status(400).send({
            success: false,
            message: "Content is missing"
        })
    }

    const productDetails = new Merchandise({
        product_id: request.body.product_id,
        product_name: request.body.product_name,
        product_price: request.body.product_price,
        product_description: request.body.product_description,
        product_image: request.body.product_image

    })

   await productDetails.save()
        .then(data => {
            return response.status(201).json({
                message: "Product added to database",
                success: true,
                data: productDetails
            })
        })
        .catch(error => {
            console.log(error)
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