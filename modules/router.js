
import '../script/vendor/routie.js'
import { getData } from "./Getdata.js";
import { displayLoading, hideLoading, showError } from './states.js';
import { renderGetData, renderRandomQuote } from "./renderData.js";


export function handleRoutes() {
    routie(
      {
      '': () => {
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
            renderGetData(response)
            hideLoading()
          })
        }


    }) 
}