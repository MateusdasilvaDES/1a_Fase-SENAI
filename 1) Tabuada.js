/* Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido. */

let contador = 1
let valor_digitado
let multiplicação_numeros 

valor_digitado = Number(prompt('Digita um numero de 1 a 10'))

while(contador == contador){

multiplicação_numeros = valor_digitado * contador
alert(valor_digitado + ' x ' + contador + ' = ' + multiplicação_numeros)

contador++

if(contador == 11){
     
     break
 }
}

alert('Essa é a tabuada do ' + valor_digitado)