const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lmpd = document.getElementById('lmpd')

const modoLigado = () => {
    if(!verificaLamp()){
        lmpd.src = './img/ligada.jpg' 
    }
};

const modoDesligado = () => {
    if( !verificaLamp()){
        lmpd.src = './img/desligada.jpg' 
    }
}

const modoQuebrado = () =>{
    lmpd.src =  './img/quebrada.jpg' 
}
const verificaLamp = () => {
    
    return lmpd.src.indexOf('quebrada') > -1
}

ligar.addEventListener('click',modoLigado);
desligar.addEventListener('click',modoDesligado);
lmpd.addEventListener('mouseover',modoLigado);
lmpd.addEventListener('mouseleave',modoDesligado);
lmpd.addEventListener('dblclick',modoQuebrado)