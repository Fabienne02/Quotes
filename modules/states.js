const loader = document.querySelector("#loading");

//show loading state
export function displayLoading() {
    loader.classList.add("display");
}

// hiding loading 
export function hideLoading() {
    loader.classList.remove("display");
}

//error state
export function showError(error) {
      const app = document.getElementById('root')
    
    
    console.log(error)

    const errorMessage = document.createElement('marquee')

    errorMessage.setAttribute("scrollamount", "10");

    errorMessage.textContent = `The Server is working hard! please try again later`

    app.appendChild(errorMessage)

  }

  export function randomQuoteError(error) {
    console.log("no quote today")

    const errorMessagestatusquote = document.getElementById("errorquoteoftheday")
    errorMessagestatusquote.textContent = `Looks like there is no quote today, sorry!`
    // .appendChild(errorMessagestatusquote)
    errorquoteoftheday.classList.add("display");

    const errorbutton = document.querySelector("button")
    errorbutton.classList.add("grey")
    document.querySelector("button").disabled = true;
  }
