
function responsive() {
    let navbar = document.querySelector("#my-navbar");    
    if (navbar.className === "navbar"){
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar"
    }
}

        // Nao esta funcionando
function close() {
    let navbar = document.querySelector("#my-navbar");
    if (navbar.className === ".responsive"){
        navbar.className = "navbar";
    }


}







