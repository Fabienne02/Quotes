

const app = document.getElementById('root')

// Getdata if
// request.onload =
function renderGetData(quotes) {
  // Begin accessing JSON data here
    quotes.data.forEach(quote => {
      const figure = document.createElement('figure')
      figure.setAttribute('class', 'figure')

      const blockquote = document.createElement('blockquote')
      blockquote.textContent = quote.text

      const cite = document.createElement('cite')
      quote.name = quote.name.substring(0, 300)
      cite.textContent = `${quote.name}`

      // console.log("wie ben ik? ", quote)
      const focus = document.createElement('a')
      focus.setAttribute("href", `#${quote.name}`);
      focus.textContent = `#`
      let statusquote = false
      

      focus.onclick = function highlighted(){
        if ( statusquote == false ) {
        figure.classList.add("highlight")
        figure.id = `${quote.name}`
        document.querySelector("body").style.overflowY = "hidden"

        statusquote = true
      } else if ( statusquote == true)  {
        figure.removeAttribute("id")
        figure.classList.remove("highlight")
        document.querySelector("body").style.overflowY = "scroll"
        statusquote = false
      }
      }

      app.appendChild(figure)
      figure.appendChild(blockquote)
      figure.appendChild(cite)
      figure.appendChild(focus)

    } )

   }


   const blockquote = document.createElement('blockquote')
   const cite = document.createElement('cite')
   const day = document.getElementById('day')
  

// Show if
  export function renderRandomQuote(quote) {
       const quotes = quote.data


    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    window.location.hash = `#${randomQuote.name}`
    console.log(randomQuote)
    blockquote.textContent = `${randomQuote.text}`
    cite.textContent = `${randomQuote.name}`


    day.appendChild(blockquote)
    day.appendChild(cite)
  }

  export { renderGetData }
