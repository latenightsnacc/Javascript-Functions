const getProductData = async () => {
    const url = 'http://192.168.8.109:3030/products';
    try{
  const response = await fetch(url, {cache: 'no-cache'});
      if(response.ok){
        const jsonResponse = await response.json()
      }
    }
    catch(error){
      console.log(error)
    }
  }