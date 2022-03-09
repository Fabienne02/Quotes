//fetch from api 
export async function getdata(){
  const url = 'https://quote.api.fdnd.nl/v1/quote'
  const data = await fetch(url)
  const response = await data.json()
  if(data.status >= 200 && data.status < 400){
  return response
  } else {
    return Promise.reject(data.status)
  }
   } 
  


