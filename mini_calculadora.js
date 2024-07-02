/*  Criar uma mini-calculadora SIMPLES, com HTML e JS.
A calculadora deve ter:

-> Título, duas labels, dois inputs e quatro botões.
-> Utilizar os 2 valores dos inputs para realizar a operação do botão clicado.
-> Mostra o resultado em um alert.

 */

 
 let numero_inpt_um = document.getElementById('inptUm')
 let numero_inpt_dois = document.getElementById('inptDois')
 let divisão_numeros, multiplicação_numeros, soma_numeros, subtração_numeros 


function soma(){

 soma_numeros = Number(numero_inpt_um.value) + Number(numero_inpt_dois.value)

alert(soma_numeros)

}

function subtração(){

 subtração_numeros =  Number(numero_inpt_um. value) - Number(numero_inpt_dois.value)

 alert(subtração_numeros)



}

function multiplicação(){

    multiplicação_numeros =  Number(numero_inpt_um. value) * Number(numero_inpt_dois.value)

    alert(multiplicação_numeros)
}


function divisão(){


    divisão_numeros =  Number(numero_inpt_um. value) / Number(numero_inpt_dois.value)

    alert(divisão_numeros)


}