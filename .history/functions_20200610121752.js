 import React from 'react';
 import ReactDOM from 'react-dom';

 class extends Product

const products = ['aphogee', "l'oreal", 'mac', 'blanc', 'nude'];

const productProps = {
    "barcode_number": "994138543402",
    "barcode_type": "UPC",
    "barcode_formats": "UPC 994138543402, EAN 0994138543402",
    "product_name": "ApHogee Hair Strengthening Kit",
    "category": "Health & Beauty > Personal Care > Hair Care > Hair Loss Treatments",
    "manufacturer": "Aphogee",
    "brand": "Aphogee",
    "description": "ApHogee Hair Strengthening Kit condition: New Brand: ApHogee Type: Other.",
    "images": [
        "https:images.barcodelookup.com/16703/167030062-1.jpg"
    ]
}


const getKeysValues = (array) => {
    array.forEach(element => {
        return
    });
}




const saveProduct = (array) => {
    let savedProducts = [];
    let productPropsKeys = Object.keys(productProps);
    let productPropsValues = Object.values(productProps);
    const getValues = (values) => {
        for (let value in values){
            return values[value];
        }
    }    
    array.map(newItem => {
        newItem = {};
        newItem[getValues(productPropsValues)] = getValues(productPropsValues);
        savedProducts.push(newItem);
    });
   
    console.log(savedProducts);
};

saveProduct(products);