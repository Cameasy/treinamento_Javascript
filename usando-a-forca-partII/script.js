var numeroum = document.querySelector("#numero1")
var numerodois = document.querySelector("#numero2")
var resposta = document.querySelector("#resposta")

//testes do console para verificar funcionalidade das chamdas id
console.log(numeroum)
console.log(numerodois)
console.log(resposta) 


function calcular(){
    var calculo = parseInt(numeroum.value) + parseInt(numerodois.value)
    resposta.textContent = `A resposta da soma de ${numeroum.value } e ${numerodois.value} é: ${calculo}`
}