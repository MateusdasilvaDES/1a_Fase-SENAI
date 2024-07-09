/* Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência, interromper e mostrar 
uma mensagem "Você errou a sequência".Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".*/

let numero_digitado = Number(prompt('Digite o numero da seguencia: '))
let condicao = 10

while(numero_digitado == condicao){

numero_digitado = Number(prompt('Digite o numero da sequencia: '))

condicao--

if(condicao == 1){

break

 }
}


if(numero_digitado != condicao){

alert('Você digitou um numero fora da sequencia! ')


}else{


alert('Você digitou a sequencia certa!')


}
