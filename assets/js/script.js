//Transição de Paginas\\
function menuHome(elemento){
    
    elemento.style.display = "flex";
    document.getElementById("home").style.display = "flex";
    document.getElementById("sobreMim").style.display = "none";
    document.getElementById("sobreTxt").style.display = "none";
}
function menuSobre(elemento){
    
    elemento.style.display = "flex";
    document.getElementById("home").style.display = "none";
    document.getElementById("sobreMim").style.display = "flex";
    document.getElementById("sobreTxt").style.display = "flex";
}
//Transição de Paginas\\