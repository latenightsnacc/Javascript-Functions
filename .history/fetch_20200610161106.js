const getProductData = async () => {
    let products;
    const url = 'http://192.168.8.109:3030/products';
    try{
  const response = await fetch(url, {cache: 'no-cache'});
      if(response.ok){
        const jsonResponse = await response.json();
        products = jsonResponse;
        console.log(products);
      }
    }
    catch(error){
      console.log(error)
    }
}

getProductData();