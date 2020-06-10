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
    let savedProducts = {
    }

    let productKeys = Object.keys(savedProducts);
     console.log(productKeys);
     let productProperties = Object.values(savedProducts);
     console.log(productProperties);
     for (let key of productKeys){
         for(let i =0; i <array.length; i++){
             key = array[i];
             savedProducts[key] = key;
             console.log(savedProducts);
         }
     }
    console.log(savedProducts.array[0].push(array[1]));
};

saveProduct(products);
