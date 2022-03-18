const app = document.getElementById('root')
window.location.hash = "Home"

//Render quotes
function renderGetData(response) {
    response.data.forEach(quote => {
      const figure = document.createElement('figure')
      figure.setAttribute('class', 'figure')

      const blockquote = document.createElement('blockquote')
      blockquote.textContent = quote.text

      const cite = document.createElement('cite')
      quote.name = quote.name.substring(0, 300)
      cite.textContent = `${quote.name}`

      const focus = document.createElement('a')
      focus.setAttribute("href", `#${quote.name}`);
      focus.textContent = `#`
      let statusquote = false

      const body = document.querySelector("body")
      
      //Focus on quote
      focus.onclick = function highlighted(){
        if ( statusquote == false ) {
        figure.classList.add("highlight")
        figure.id = `${quote.name}`
        body.classList.add("hidden")

        statusquote = true
      } else if ( statusquote == true)  {
        figure.removeAttribute("id")
        figure.classList.remove("highlight")
        body.classList.remove("hidden")
        statusquote = false
      }
      }

      app.appendChild(figure)
      figure.appendChild(blockquote)
      figure.appendChild(cite)
      figure.appendChild(focus)

    } )

   }


   //Render rnadom quote
   const blockquote = document.createElement('blockquote')
   const cite = document.createElement('cite')
   const day = document.getElementById('day')
  


  export function renderRandomQuote(response) {
       const quotes = response.data


    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    window.location.hash = `#${randomQuote.name}`
    console.log(randomQuote)
    blockquote.textContent = `${randomQuote.text}`
    cite.textContent = `${randomQuote.name}`


    day.appendChild(blockquote)
    day.appendChild(cite)
  }

  export { renderGetData }
