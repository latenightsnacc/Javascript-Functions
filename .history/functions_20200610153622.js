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
     let props = [];
     const productProperties = Object.entries(productProps);
     for(let [key,value] of productProperties){
         let prop = [`${key}: ${value}`];
         props.push(prop);
     }
     array.map(productName => {
         productName = [productName];
         savedProducts.push(productName.concat(props));
     })
    
    
     console.log(savedProducts);
 };

const saveProduct = (array) => {
    
     let savedProducts;
    let props = [];
    let keyProps = [];
    let valProps = [];
    const productProperties = Object.entries(productProps);
    for(let [key,value] of productProperties){
        keyProps.push(key);
        valProps.push(value);
        let prop = [`${key}: ${value}`];
        props.push(prop);
    }
    console.log(props);
    let productProp= props.reduce((feature, val) => (feature[feature] = val, feature,val),{});
    let savedProducts = array.reduce((key, value) => (key[value]=[productProp],key),{});
      savedProducts = keyProps.reduce((a,b) => (a[b]='',a),{});
     array.map(productName => {
         productName = [productName];
         savedProducts = keyProps.reduce((a,b) => (a[b]='',a),{});
     })
    
     console.log(keyProps);
     console.log(valProps);
    console.log(savedProducts);
};

saveProduct(products);