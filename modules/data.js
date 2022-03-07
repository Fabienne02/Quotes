// import getdata if & else
// import show if & else

import { GetdataError } from "./getData.js";
import { ShowError } from "./getData.js";
import { renderGetData } from "./renderData.js";
import { renderDataShow } from "./renderData.js";

  //dubbele error getdata
  import { error } from "./getData.js";


request.onload = function getdata() {
    const quote = request.response.data
    if (request.status >= 200 && request.status < 400) {
  
        renderGetData ()
        
  
        highlighted()
  
    } else {
        GetdataError ()
    }
  }

  error ()

  request.send()



  function show() {
    if (request.status >= 200 && request.status < 400) {
         renderDataShow ()

    } else  {
        ShowError ()
    }
    

}