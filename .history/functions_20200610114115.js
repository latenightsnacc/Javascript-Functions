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

const saveProduct = (array) => {
    let savedProducts = [];

    
    let productPropsValues = Object.values(productProps);
    
    for(let i =0; i < array.length; i++) {
        let newItem = array[i];
        let prod = new Object(newItem);
        savedProducts.push(prod);    
    }
    console.log(savedProducts);
};
let productPropsKeys = Object.keys(productProps);
const getKeys = (keys) => {
    for (let key in keys){
         console.log(`I am a ${keys[key]}`);
        console.log(keys[key]);
    }
}
getKeys(productPropsKeys);

let productPropsValues = Object.values(productProps);
const getValues = (values) => {
    for (let value in values){
        console.log(values[value]);
    }
}
getValues(productPropsValues);

