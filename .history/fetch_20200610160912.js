const getProductData = async () => {
    const url = 
    try{
  const response = await fetch(endpoint, {cache: 'no-cache'});
      if(response.ok){
        const jsonResponse = await response.json()
      }
    }
    catch(error){
      console.log(error)
    }
  }