const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#prox');
const prev = document.querySelector('#ant');
const auto = true;
const intervalTime = 7500;
let slideInterval;

const nextSlide = () => {
    //Pefa a classe current
    const current = document.querySelector('.current');
    //Remove a classe current
    current.classList.remove('current');
    //Check for prev slide
    if (current.previousElementSibling) {
        //Add current to text sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //ADD current to start
        slides[slides.length - 1].classList.add('current');

    }
    setTimeout(() => current.classList.remove('current'));

}
//eventos botoes
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})
prev.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

//Auto slide
if (auto) {
    //Proximo slide no intervalo de tempo
    slideInterval = setInterval(nextSlide, intervalTime)
}


/**(MENU MOBILE), ACIONAMENTO DO MENU*/

let iconMenu = document.querySelector('.burger');
let menu = document.querySelector(".menu")

iconMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__move')
});


/* Validação de Formulário */

let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let mensagem = document.getElementById('mensagem')

function validarContato() {

    if (nome.value == '' || nome.value == null || nome.value.length < 3) {

        alert("Por favor, indique o seu nome.");
        nome.focus();
        return false;

    } else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value == '' || email.value == null) {

        alert('Email inválido')
        email.focus()
        return false

    } else if (telefone.value == '' || telefone.value.length < 11 || telefone.value == null) {

        alert('Telefone inválido')
        telefone.focus()
        return false

    } else if (mensagem.value == '' || mensagem.value == null) {

        alert('Por favor digite algo')
        mensagem.focus()
        return false

    }
};