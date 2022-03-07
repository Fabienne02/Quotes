// import getdata if & else
// import show if & else

import { GetdataError } from "./getData.js";
import { ShowError } from "./getData.js";
import { renderGetData } from "./renderData.js";
import { renderDataShow } from "./renderData.js";

import { highlighted } from "./renderData.js";

  //dubbele error getdata
  import { error } from "./getData.js";

  import {  XMLHttpsRequest } from "./Getdata.js";
const url = 'https://quote.api.fdnd.nl/v1/quote'
  const data = await fetch(url)
 const response = await data.json()
const quote = response.data

export function getdata() {
    if (response.status >= 200 && response.status < 400) {
  
        renderGetData ()
        
  
        highlighted()
  
    } else {
        GetdataError ()
    }
  }

  //error ()


window.addEventListener('load', getdata)

 



  function show() {
    if (request.status >= 200 && request.status < 400) {
         renderDataShow ()

    } else  {
        ShowError ()
    }
    

}