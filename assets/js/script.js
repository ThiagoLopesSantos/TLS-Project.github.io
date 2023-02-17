let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 15000);

function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}


// BOTÃO DE RETORNO AO TOPO
const btn = document.getElementById("return-button");

btn.addEventListener("click", function(){
    window.scrollTo(0,0);
});

document.addEventListener('scroll',ocultarBotao);

function ocultarBotao() { 
    if(window.scrollY > 600){
        btn.style.display = "flex";
    }else {
        btn.style.display = "none";
    }
}

ocultarBotao();