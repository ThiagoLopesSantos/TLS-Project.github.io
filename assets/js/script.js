
/*let totalSlides = document.querySelectorAll('.slider--item').length; //selecionando a quantidade total de slides

let currentSlide = 0;

document.querySelector('.slider--width').style.width = 
    `calc(100vw * ${totalSlides})`; //Editando a largura da area do slide de acordo com o tamanho da tela e quantidade de slides

//FUNÇÃO PARA O  BOTÃO DE CLIQUE VOLTAR 
function goPrev() {
    currentSlide++;
    if(currentSlide > 0) {
        currentSlide = 0;
    }
    console.log(currentSlide);
    updateMargin();
}
//FUNÇÃO PARA O BOTÃO DE CLIQUE PROXIMO
function goNext() {
    currentSlide--;
    if(currentSlide > 0) {
        currentSlide = totalSlides - 1;
    }else if(currentSlide < (-totalSlides + 1)) {
        currentSlide = 0;
    }
    console.log(currentSlide);
    updateMargin();
    }
    
//ATUALIZA O STATUS DO SLIDE
function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth; // fazendo o slide ocupar a tela corretamente mesmo com a barra de rolagem

    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `${newMargin}px`;
}

//setInterval(goNext, 8000); // automatiza a passagem de slides 

*/





let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 15000);

function nextImage(){
    count++;
    if(count>4){
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