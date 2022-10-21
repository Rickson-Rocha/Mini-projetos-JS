
const calcular = document.getElementById('calcular')

const Imc = () => {
const nome = document.getElementById('nome_usuario')
const altura = document.getElementById('altura_usuario')
const peso = document.getElementById('peso_usuario')
const resultado = document.getElementById('resultado')
const verificar = validacao(nome,peso,altura)
const calculoImc = peso.value * (altura.value * altura.value)


};

const validacao = (nome,peso,altura) => {
 if(nome.value == '' && peso.value == '' && altura.value==''){
    alert('Para validar o calculo é necessário preencher todos os campos')
 }
}

calcular.addEventListener('click',Imc);
