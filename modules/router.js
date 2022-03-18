
import '../script/vendor/routie.js'
import { getData } from "./getdata.js";
import { displayLoading, hideLoading, showError, randomQuoteError } from './states.js';
import { renderGetData, renderRandomQuote } from "./renderdata.js";


export function handleRoutes() {
    routie(
      {
      'Home': () => {
        displayLoading()
        getData()
        .then(response => {
          renderGetData(response)
          hideLoading()
        }).catch(error => showError(error))
        },
        'random': () => {
          displayLoading()
          getData()
          .then(response => {
            renderRandomQuote(response)
            hideLoading()
          }).catch(error => randomQuoteError(error))
        }


    }) 
}