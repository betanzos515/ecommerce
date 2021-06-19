
const buttons = document.querySelectorAll('button');
let contador = 1;
buttons.forEach(button =>{
    button.setAttribute('data-id',contador);
    contador++;
})

const espacioTarjetas = document.querySelector('.espacio-tarjetas');

espacioTarjetas.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn')){
        console.log(e.target);
    }
});