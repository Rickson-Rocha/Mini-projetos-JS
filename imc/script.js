
const calcular = document.getElementById('calcular')

const Imc = () => {
const nome = document.getElementById('nome_usuario')
const altura = document.getElementById('altura_usuario')
const peso = document.getElementById('peso_usuario')
const resultado = document.getElementById('resultado')
const verificar = validacao(nome,peso,altura)
const calculo = calculoImc(peso.value,altura.value)
const msg = nivelImc(calculo)

if(verificar==true){
   resultado.textContent = `${nome.value} seu nível de IMC é : ${msg}`
}else{
   alert('preencha os campos')
}


};

const validacao = (nome,peso,altura) => {
 if(nome.value !== '' && peso.value !== '' && altura.value !==''){
  
    return true;
 }
 return false;
}

const calculoImc = (peso,altura)=>{
   const calc = peso/(altura*altura) 

   return calc.toFixed(1);
}

const nivelImc = (calculo)=>{
   msg = ['magreza','normal','sobrepeso','obesdidade','obesidade grave']
   if (calculo < 18.5) return msg[0]
   if(calculo >=18.5 && calculo<=24.9) return msg[1]
   if(calculo>=25.0 && calculo <= 39.9) return msg[2]
   if(calculo>=30.0 && calculo <=39.9) return msg[3]
   if(calculo>=40) return msg[4]
   
}
calcular.addEventListener('click',Imc);
