
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
