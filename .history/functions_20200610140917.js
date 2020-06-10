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

let productPropsKeys = Object.keys(productProps);
let productPropsValues = Object.values(productProps);

const getKeysValues = (array1, array2) => {
    let keys = array1.map(key => {
        return key;
    })
    console.log(keys);

    let values = array2.map(value => {
        return value;
    })
    console.log(values);
}

const saveProduct = (array) => {
    let savedProducts = [];
    const productProperties = Object.entries(productProps);
    console.log(productProperties);
    for(let i =0; i < array.length; i++ ){
        let newItem = array[i];
        for(let [key,value] in productProperties){
            let objKey;
            key = objKey;
            newItem = {
                objKey : value
            }
        }
        savedProducts.push(newItem);
    }
    console.log(savedProducts);
};

saveProduct(products);