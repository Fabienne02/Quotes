/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

const button1 = document.querySelectorAll("#card")
let inDruk1 = document.querySelector("#card")
let statuscard = false

button1.forEach((inDruk1) => {
    inDruk1.addEventListener("click", vervaag)
});

function vervaag() {
    if (statuscard == true) {
        document.querySelector("#front").style.opacity= "0";

        statuscard = false;

    } else if (statuscard == false) {
        document.querySelector("#front").style.opacity = "1";

        statuscard = true;
    }

}
