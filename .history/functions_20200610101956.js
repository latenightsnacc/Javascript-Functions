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
    const savedProducts = {
        product: {
            "barcode_number": "",
            "barcode_type": "",
            "barcode_formats": "",
            "product_name": "",
            "category": "",
            "manufacturer": "",
            "brand": "",
            "description": "",
            "images": []
        }
    }

    for (product of savedProducts) {
        for(let i = 0; i < array.length; i++){
            savedProducts.product = array[i];
        }
    }
    console.log(savedProducts);
};

saveProduct(products);
