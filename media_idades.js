/* Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.
 (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade) */

 let nome_pessoa
 let idade_pessoa
 let contador = 0
 let soma_idades = 0 
 let media_idades 
 let nome_maior
 let idade_maior = 0
 let quantidade_pessoa = 5

while(contador < 5 ){

 nome_pessoa = prompt('Digite o nome: ')
 idade_pessoa = Number(prompt('Digite a idade: '))
 
 soma_idades = soma_idades + idade_pessoa
 
 contador++ 
 
 if(idade_pessoa > idade_maior){

   idade_maior = idade_pessoa
   nome_maior = nome_pessoa

 }
}

media_idades = soma_idades / quantidade_pessoa

alert('Essa é a media das idades: ' + media_idades)

alert(nome_maior + ' tem a maior idade que é ' + idade_maior)
