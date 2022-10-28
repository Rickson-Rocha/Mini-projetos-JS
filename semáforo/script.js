const vermelho = document.getElementById('vermelho')
const verde = document.getElementById('verde')
const amarelo = document.getElementById('amarelo')
const automatico = document.getElementById('automatico')
const img = document.getElementById('img')

function vermelhoLigado(){
    img.src =  'img/vermelho.png' 
}

function amareloLigado(){
    img.src =  'img/amarelo.png' 
}

function verdeLigado(){
    img.src =  'img/verde.png' 
}
function automaticoLigado(){
   
}

vermelho.addEventListener('click',vermelhoLigado)
verde.addEventListener('click',verdeLigado)
amarelo.addEventListener('click',amareloLigado)
automatico.addEventListener('click',automaticoLigado)