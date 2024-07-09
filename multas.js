/* Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos
 na carteira de habilitação.Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, 
 senão, exibir “Você está regular”.*/

 let quantidade_multas_cadastro
 let valor_multa , pontos_perdidos 
 let valor_total_multas = 0, valor_total_pontos = 0

 quantidade_multas_cadastro = Number(prompt('Digite o valor de quantas multas deseja cadastrar: '))

 while(quantidade_multas_cadastro > 0){


 valor_multa = Number(prompt('Digite o valor da multa: '))
 pontos_perdidos = Number(prompt('Digite quantos pontos foram perdidos com as multas: '))


 valor_total_multas = valor_total_multas + valor_multa

 valor_total_pontos = valor_total_pontos + pontos_perdidos

 quantidade_multas_cadastro = quantidade_multas_cadastro - 1

 }

 alert('Esse é o valor total a pagar pelas multas: ' + valor_total_multas)
 alert('Esse é a quantidade de pontos perdidos: ' + valor_total_pontos)

 if(pontos_perdidos >= 21){

 alert('Você esta inrregular!')


 }else if(pontos_perdidos < 21){

  alert('Você esta regular!')

 }

