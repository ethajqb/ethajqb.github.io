let isOpen = true; 

let navBar = document.getElementsByClassName("navStyle")[0];
let content = document.getElementsByClassName("container-content")[0];

document.getElementById("hamburger").onclick = function() {

    if (isOpen == true) {
        navBar.classList.add("nav-closed");
        content.classList.add("content-wide");
        isOpen = false;
    } else {
        navBar.classList.remove("nav-closed");
        content.classList.remove("content-wide");
        isOpen = true;
    }
}
