
import '../script/vendor/routie.js'
import { getdata } from "./getdata.js";
import { displayloading, hideloading, showerror } from './states.js';
import { rendergetdata, renderrandomquote } from "./renderdata.js";


export function handleroutes() {
    routie(
      {
      'Home': () => {
        displayloading()
        getdata()
        .then(response => {
          rendergetdata(response)
          hideloading()
        }).catch(error => showerror(error))
        },
        'random': () => {
          displayloading()
          getdata()
          .then(response => {
            renderrandomquote(response)
            // renderGetData(response)
            hideloading()
          })
        }


    }) 
}