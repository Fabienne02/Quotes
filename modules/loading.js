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