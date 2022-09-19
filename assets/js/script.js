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






















/*
// SESSÃO DOS SLIDES \\
let totalSlides = document.querySelectorAll('.slider--item').length; //selecionando a quantidade total de slides
let currentSlide = 0;

document.querySelector('.slider--width').style.width = 
    `calc(100vw * ${totalSlides})`; //Editando a largura da area do slide de acordo com o tamanho da tela e quantidade de slides
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;//ajustando a altura do slider com os botões

//FUNÇÃO PARA O  BOTÃO DE CLIQUE VOLTAR 
function goPrev() {
    currentSlide++;
    if(currentSlide > 0) {
        currentSlide = 0;
    }
    console.log(currentSlide);
    updateMargin();
}
//FUNÇÃO PARA O  BOTÃO DE CLIQUE PROXIMO
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
    
//FUNÇÃO QUE ATUALIZA OS SLIDES
function updateMargin() {
    
    // fazendo o slide ocupara tela corretamente mesmo com a barra de rolagem
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth; 

    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `${newMargin}px`;
}

// AUTOMATIZA  COM INTERVALO DE 2SEG.
setInterval(goNext, 20000); */