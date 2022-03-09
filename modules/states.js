
const loader = document.querySelector("#loading");
//show loading state
export function displayloading() {
    loader.classList.add("display");
}

// hiding loading 
export function hideloading() {
    loader.classList.remove("display");
}

//error state
export function showerror(error) {
      const app = document.getElementById('root')
    
    
    console.log(error)

    const errorMessage = document.createElement('marquee')

    errorMessage.setAttribute("scrollamount", "10");

    errorMessage.textContent = `The Server is working hard! please try again later`

    app.appendChild(errorMessage)

  }
