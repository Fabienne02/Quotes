// To do:
// - laad state erin bij quotes - net werk op traag om te testen 
// - Modules 
// - hash routes voor de focus state = als hash dit is moet er iets gebeuren
// - JS opschonen = console log eruit
// - read me compleet maken en laatste week wiki
// https://github.com/cmda-minor-web/web-app-from-scratch-2122/blob/main/course/week-4.md
// - flow control update en in readme


const app = document.getElementById('root')

const request = new XMLHttpRequest()
request.open('GET', 'https://quote.api.fdnd.nl/v1/quote', true)
request.responseType = "json";


request.onload = function getdata() {
  // Begin accessing JSON data here
  const quote = request.response.data
  if (request.status >= 200 && request.status < 400) {

    quote.forEach(quote => {
      const figure = document.createElement('figure')
      figure.setAttribute('class', 'figure')

      const blockquote = document.createElement('blockquote')
      blockquote.textContent = quote.text

      const cite = document.createElement('cite')
      quote.name = quote.name.substring(0, 300)
      cite.textContent = `${quote.name}`

      console.log("wie ben ik? ", quote)
      const focus = document.createElement('a')
      // focus.setAttribute("href", `#${quote.name}`);
      // window.location.hash = "Home";
      location.hash = '#Home'
      focus.textContent = `#`
      // let statusquote = false
      

      focus.onclick = function highlighted(){
        if ( location.hash === '#Home' ) {
        figure.classList.add("highlight")
        figure.id = `${quote.name}`
        document.querySelector("body").style.overflowY = "hidden"

        location.hash = `#${quote.name}`;
        console.log(window.location.hash)
      } else {
        console.log("werkt")
        figure.removeAttribute("id")
        figure.classList.remove("highlight")
        document.querySelector("body").style.overflowY = "scroll"
        window.location.hash = "Home"
      }
      }

      app.appendChild(figure)
      figure.appendChild(blockquote)
      figure.appendChild(cite)
      figure.appendChild(focus)

    } )

  } else {
    // Deze error gebeurd pas wanneer request.status <200 && > 400 is
    // else voer deze error fucntie uit zodat je de error in een module kan stoppen 
    const errorMessagestatus = document.createElement('marquee')
    errorMessagestatus.textContent = `The Server is working hard! please try again later`
    app.appendChild(errorMessagestatus)

    console.log("ERROR!")
  }
}

// Deze error gebeurd al wanneer de API niet gelezen kan worden, geen request.status
// Beide errors houden dezelfde css aan door oproeping van element tags in dezelfde #root AKA const app
request.onerror = function error() {
  console.log("ERROR")

  const errorMessage = document.createElement('marquee')
  errorMessage.setAttribute("scrollamount", "10");
  errorMessage.textContent = `The Server is working hard! please try again later`
  app.appendChild(errorMessage)
}


request.send()



// Random quote of the day js
const button = document.querySelectorAll(".bottom")
const inDruk = document.querySelector(".bottom")
const blockquote = document.createElement('blockquote')
const cite = document.createElement('cite')

const day = document.getElementById('day')


button.forEach((inDruk) => {
    inDruk.addEventListener("click", show)
});




function show() {
    if (request.status >= 200 && request.status < 400) {
      const quotes = request.response.data;
       
      console.log(quotes[Math.floor(Math.random() * quotes.length)].text)


      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      console.log(randomQuote)
      blockquote.textContent = `${randomQuote.text}`
      cite.textContent = `${randomQuote.name}`


      day.appendChild(blockquote)
      day.appendChild(cite)
      
      // Loading manipulation with delay
      day.classList.remove("display");
    setTimeout(() => {
        day.classList.add("display");
    }, 3000);

    } else  {
      //Deze error gebeurd wel omdat het een onclick event is
      //Hierbij maken we geen nieuw element aan maar gebruiken we de p in de header want anders zou dit elke keer als we onclick uitvoeren gebeuren -> too many errors!
      console.log("no quote today")

      const errorMessagestatusquote = document.getElementById("errorquoteoftheday")
      errorMessagestatusquote.textContent = `Looks like there is no quote today, sorry!`
      // .appendChild(errorMessagestatusquote)
      errorquoteoftheday.classList.remove("display");
      setTimeout(() => {
        errorquoteoftheday.classList.add("display");
      }, 3000);

      const errorbutton = document.querySelector("button")
      errorbutton.style.backgroundColor = "lightgrey"
      document.querySelector("button").disabled = true;
    }
    

}


// JAVASCRIPT LOADING STATE
const btn = document.querySelector(".bottom");
btn.addEventListener("click", displayLoading);
const loader = document.querySelector("#loading");

function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 3000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}


// JAVASCRIPT VOOR DE SINGLEQUOTE HASH ROUTE

// Vraag: Hoe kan ik de # koppelen aan de quote, deze quote full screen krijgen en de styling behouden?

// const focussedapp = document.getElementById('singlequote')
// const header = document.querySelector('header')
// const focussedquote = document.getElementsByClassName('highlight')
// const figures = document.getElementsByClassName('figure')


// function onRouteChanged() {
//   console.log("Hash changed!");
//   figures.style.display = "none"
//   header.style.display = "none"
//   focussedquote.style.display = "block"


//       const p = document.createElement('p')
//       p.textContent = "hi"

//       // Geef # de id van quote
//       const focus = document.createElement('a')
//       focus.textContent = `#`
//       focus.setAttribute("href", "");


//       focussedapp.appendChild(p)
//       focussedapp.appendChild(focus)


// }

// window.addEventListener("hashchange", onRouteChanged);


