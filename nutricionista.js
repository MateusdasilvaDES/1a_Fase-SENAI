/*  Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. 
Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à
lactose (segunda pergunta).Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. Em seguida coletar os dados de
3 alimentos, sendo digitado o nome do alimento,se ele contém glúten ou não e se ele contém lactose ou não. Ao final,informar se o
paciente pode comer os 3 alimentos digitados "Dieta adequada!"ou não pode "Dieta inadequada, contém alimentos aos quais o paciente
é intolerante!". */

 // DECLARAÇOES DE VARIAVEIS

 let nome_usuario
 let usuario_celiaco, intolerante_lactose
 let alimento_um_lactose,alimento_um_glutem
 let alimento_dois_lactose,alimento_dois_glutem
 let alimento_três_lactose, alimento_três_glutem
 var alimento_proibido = false

 // ENTRADA DE DADOS 

 nome_usuario = prompt('Digite seu nome: ')
 usuario_celiaco = prompt('\nVocê é celaico (intolerancia a glutem) ? ')
 intolerante_lactose = prompt('\nVocê tem intolerancia a lactose ?')

 // PRIMEIRO ALIMENTO 

 prompt('\nDigite o primeiro alimento: ')
 alimento_um_glutem = prompt('\nEsse alimento contem glutem?')
 alimento_um_lactose = prompt('\nEsse alimento contem lactose? ')
 

if(usuario_celiaco == 'SIM' && alimento_um_glutem || 
intolerante_lactose == 'SIM' && alimento_um_lactose == 'SIM'){

alimento_proibido = true

}

 // SEGUNDO ALIMENTO 

 prompt('\nDigite o segundo alimento: ')
 alimento_dois_glutem = prompt('\nEsse alimento contem glutem?')
 alimento_dois_lactose = prompt('\nEsse alimento contem lactose? ')
 
 if(usuario_celiaco == 'SIM' && alimento_dois_glutem || 
 intolerante_lactose == 'SIM' && alimento_dois_lactose == 'SIM'){

 alimento_proibido = true

 }

 // TERCEIRO ALIMENTO

 prompt('\nDigite o terceiro alimento: ')
 alimento_três_glutem = prompt('\nEsse alimento contem glutem?')
 alimento_três_lactose = prompt('\nEsse alimento contem lactose? ')

 if(usuario_celiaco == 'SIM' && alimento_tres_glutem || 
 intolerante_lactose == 'SIM' && alimento_tres_lactose == 'SIM'){
 
    alimento_proibido = true

 }

 // SAIDA DE DADOS 

 if(alimento_proibido == true){

 alert('dieta possui alimento proibido!')

 }else{

alert('dieta adequada!')

 }
