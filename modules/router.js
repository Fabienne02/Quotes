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
        XMLHttpsRequest ()
        then 
        getdata ()
        updateUI('home')
       }
        },
        'Random': () => {
            XMLHttpsRequest ()
            displayLoading ()
            hideLoading ()
            show ()

            updateUI(`${quote.name}`)
        },
        'focus': () => {
            highlighted ()

         updateUI(`${quote.name}`)
            // renderProductData()
        }

}

// waar laat je send request ?
// kan de oproeping api niet boven aan ipv voor elke #