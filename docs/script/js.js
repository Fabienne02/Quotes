// To do:
// - autheur apart
// - zero/laad stat erin en error beter uitwerken
// - div eruit 

const app = document.getElementById('root')

var request = new XMLHttpRequest()
request.open('GET', 'https://quote.api.fdnd.nl/v1/quote', true)
request.responseType = "json";


request.onload = function () {
  // Begin accessing JSON data here
  var info = request.response.data
  if (request.status >= 200 && request.status < 400) {
    info.forEach(quote => {
      const figure = document.createElement('figure')
      figure.setAttribute('class', 'figure')

      const blockquote = document.createElement('blockquote')
      blockquote.textContent = quote.text

      const cite = document.createElement('cite')
      quote.name = quote.name.substring(0, 300)
      cite.textContent = `${quote.name}`

      app.appendChild(figure)
      figure.appendChild(blockquote)
      figure.appendChild(cite)

    } )
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}


request.send()



// Random quote of the day js
const button = document.querySelectorAll(".bottom")
const inDruk = document.querySelector(".bottom")
const blockquote = document.createElement('blockquote')

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
      // om de autheur eronder mischien cite of de p.context te herhalen dus nieuw element
      blockquote.textContent = `${randomQuote.text} ${randomQuote.name}`

      day.appendChild(blockquote)


    } else  {
    
      p.textContent = none
      // statusquote = false

      day.appendChild(p)
  }
    

}




