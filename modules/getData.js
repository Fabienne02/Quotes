const url = 'https://quote.api.fdnd.nl/v1/quote  '
  const data = await fetch(url)
 const response = await data.json()
     
export async function XMLHttpsRequest(){
    console.log(response)
   } 
  
   const app = document.getElementById('root')



// Getdata else
function GetdataError () {
      const errorMessagestatus = document.createElement('marquee')
      errorMessagestatus.textContent = `The Server is working hard! please try again later`
      app.appendChild(errorMessagestatus)

      console.log("ERROR!")
  }

// Show else


function ShowError () {
    console.log("no quote today")

      const errorMessagestatusquote = document.getElementById("errorquoteoftheday")
      errorMessagestatusquote.textContent = `Looks like there is no quote today, sorry!`
      //.appendChild(errorMessagestatusquote)
      errorquoteoftheday.classList.remove("display");
      setTimeout(() => {
        errorquoteoftheday.classList.add("display");
      }, 3000);

      const errorbutton = document.querySelector("button")
      errorbutton.style.backgroundColor = "lightgrey"
      document.querySelector("button").disabled = true;
}

// dubbele error op getdata
function error() {
    console.log("ERROR")
  
    const errorMessage = document.createElement('marquee')
    errorMessage.setAttribute("scrollamount", "10");
    errorMessage.textContent = `The Server is working hard! please try again later`
    app.appendChild(errorMessage)
  }


  export { GetdataError }
  export { ShowError }
  export { error }
