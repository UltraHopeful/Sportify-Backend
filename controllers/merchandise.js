const { request, response } = require('express')
const { v4: uuidv4 } = require('uuid');
var Merchandise = require('../models/merchandise')

//display all merchandise

const getMerchandiseData = async (product_id) => {
    const merchandiseData = await Merchandise.find({
        id:  product_id
    });
    return new Promise((resolve) => {
        if (merchandiseData.length == 0) {
            resolve(merchandiseData);
        }
        else {
            resolve(merchandiseData.map((product) => {
                return {
                    id: product.product_id,
                    productImg: product.image,
                }
            }));
        }
    })
}

module.exports={getMerchandiseData}