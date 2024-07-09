/*  Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes. 
O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira do Bom Jesus 
até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). Criar um programa
que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. Ao final mostrar a velocidade
média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. Se a velocidade média geral ficar abaixo de 15km/h mostrar
uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!"
e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!"

 */

// DECLARAÇÕES DE VARIAVEIS 
 
let nome_equipe
let nome_pessoa_um, nome_pessoa_dois, nome_pessoa_tres,nome_pessoa_quatro
let tempo_pessoa_um, tempo_pessoa_dois, tempo_pessoa_tres, tempo_pessoa_quatro
let media_trecho_um, media_trecho_dois, media_trecho_tres, media_trecho_quatro
let distancia_trecho_um = 30, distancia_trecho_dois = 45, distancia_trecho_tres = 30, distancia_trecho_quatro = 35
let quantidade_trechos = 4
let soma_medias,  media_geral
// ENTRADA DE DADOS 

nome_equipe = prompt('Qual o nome da equipe?')

nome_pessoa_um = prompt('\nDigite o nome do primeiro integrante: ')
tempo_pessoa_um =Number(prompt('\nquanto tempo você levou no seu trecho?'))

nome_pessoa_dois = prompt('\nDigite o nome do segundo integrante: ')
tempo_pessoa_dois = Number(prompt('\nquanto tempo você levou no seu trecho?'))

nome_pessoa_tres = prompt('\nDigite o nome do terceiro integrante: ')
tempo_pessoa_tres = Number(prompt('\nquanto tempo você levou no seu trecho?'))

nome_pessoa_quatro = prompt('\nDigite o nome do quarto integrante: ')
tempo_pessoa_quatro = Number(prompt('\nquanto tempo você levou no seu trecho?'))

// CALCULOS 

media_trecho_um = distancia_trecho_um / tempo_pessoa_um
media_trecho_dois = distancia_trecho_dois / tempo_pessoa_dois
media_trecho_tres = distancia_trecho_tres / tempo_pessoa_tres
media_trecho_quatro = distancia_trecho_quatro / tempo_pessoa_quatro
soma_medias = media_trecho_um + media_trecho_dois + media_trecho_tres + media_trecho_quatro
media_geral = soma_medias / quantidade_trechos

// SAIDA DE DADOS ]

if(media_geral < 15){

alert('Desempenho pode melhorar bastante!')

}else if(media_geral>= 15 && media_geral <= 18){

alert('Desempenho bom, mas ainda pode melhorar!')


}else if(media_geral > 18){


alert('Desempenho excelente. Parabéns!')

}

alert('Essa é a media de velocidade do primeiro trecho: ' + media_trecho_um)

alert('Essa é a media de velocidade do segundo trecho: ' + media_trecho_dois)

alert('Essa é a media de velocidade do terceiro trecho: ' + media_trecho_tres)

alert('Essa é a media de velocidade do quarto trecho: ' + media_trecho_quatro)

alert('Essa é media geral de velocidade: ' +  media_geral)