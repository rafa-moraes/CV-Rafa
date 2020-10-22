function responsive() {
    let navbar = document.querySelector(".navbar");
    if (navbar.className === "navbar"){
        navbar.className += "responsive";
    } else {
        navbar.className = "navbar"
    }




}