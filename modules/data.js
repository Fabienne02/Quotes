// import getdata if & else
// import show if & else

import { GetdataError } from "./getData.js";
import { ShowError } from "./getData.js";
import { renderGetData } from "./renderData.js";
import { renderDataShow } from "./renderData.js";
import { displayLoading } from "./loading.js";


// import { highlighted } from "./renderData.js";

  //dubbele error getdata
  import { error } from "./getData.js";

  import {  XMLHttpsRequest } from "./Getdata.js";
const url = 'https://quote.api.fdnd.nl/v1/quot'
  const data = await fetch(url)
 const response = await data.json()
const quote = response.data


export function getdata() {
    if (data.status >= 200 && data.status < 400) {
  console.log("i work")
        renderGetData ()
  
    } else{
      console.log("i work too")
        GetdataError ()
    }
  }


// error() 
// response.on('error', function(error){
//   console.log("error")
// })
 
const button = document.querySelectorAll(".bottom")
const inDruk = document.querySelector(".bottom")

const day = document.getElementById('day')


button.forEach((inDruk) => {
    inDruk.addEventListener("click", show)
});


  function show() {
    if (data.status >= 200 && data.status < 400) {
      // displayLoading()
      console.log("hi")
         renderDataShow ()

    } else  {
      console.log ("hi error)")
        ShowError()
    }
    

}

