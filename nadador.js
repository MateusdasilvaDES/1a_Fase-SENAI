/* Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
  - "Infantil A" de 5 a 10 anos de idade
  - "Juvenil A" de 11 a 17 anos de idade
  - "Senior" com 18 anos de idade ou mais
  */

  // DECLARAÇÕES DE VARIAVEIS

  let idade_nadador

  // ENTRADA DE DADOS 

  idade_nadador = Number(prompt('Digite sua idade: '))

  // SAIDA DE DADOS 

  if(idade_nadador >= 5 && idade_nadador <= 10){

 alert('Você é infantil A!')


  }else if(idade_nadador >= 11 && idade_nadador <= 17){

  alert('Você é juvenil A!')


  }else if(idade_nadador >= 18){

  
    alert('Você é senior!')

  }