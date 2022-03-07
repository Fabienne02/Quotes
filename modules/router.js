// import getdata if & else
// import show if & else
import { getdata } from "./data.js";
import { show } from "./data.js";

//highlighted
import { highlighted } from "./renderData.js";

// import loading functions
import { displayLoading} from "./loading.js";
import { hideLoading } from "./loading.js";


// import xmlhttpsrequest
import { XMLHttpsRequest } from "./getData.js";

import './vendor/routie.min.js'

export function handleRoutes() {
    routie(
      {
      '': () => {
        XMLHttpsRequest().then 
        getdata().then
        request.send()
        location.hash = "#Home";
       }
        },
        'Random': () => {
            XMLHttpsRequest().then
            displayLoading().then
            hideLoading().then
            show()

            location.hash = `#${quote.name}`;
        },
        'focus': () => {
            highlighted ()

            location.hash = `#${quote.name}`;
            // renderProductData()
        }

}

// waar laat je send request ?
// kan de oproeping api niet boven aan ipv voor elke #