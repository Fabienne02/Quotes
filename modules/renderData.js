// Getdata if
function renderGetData () {
const quote = request.response.data

  quote.forEach(quote => {
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
    figure.appendChild(focus)

  } )
}

// Highlighted ()
console.log("wie ben ik? ", quote)
      const focus = document.createElement('a')
      focus.textContent = `#`
      let statusquote = false

focus.onclick = function highlighted(){
    if ( statusquote == false) {
    figure.classList.add("highlight")
    figure.id = `${quote.name}`
    document.querySelector("body").style.overflowY = "hidden"

    window.location.hash = `${quote.name}`;
    console.log(window.location.hash)

    statusquote = true
    
  } else if ( statusquote == true ) {
    console.log("werkt")
    figure.removeAttribute("id")
    figure.classList.remove("highlight")
    document.querySelector("body").style.overflowY = "scroll"
    
    statusquote = false
  }
  }

// Show if
  function renderDataShow () {
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
  }

  export { renderGetData }
  export { renderDataShow }