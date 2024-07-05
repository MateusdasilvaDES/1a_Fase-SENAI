/* Criar um sistema clássico de jogos Tower Defense (Defesa de Torre) de acordo com a imagem disponibilizada. 
A Torre começa com estrutura em 100 e o usuário pode destruir ou construir, digitando valores nos campos e 
clicando nos botões de menos e mais. O valor de estrutura deve ser atualizado após destruir ou construir.

A situação da Torre começa como Ativa, mas caso sua estrutura chegue em zero ou abaixo, atualizar a situação para "Destruída".*/


let numero_inpt_um = document.getElementById('inptUm')
let numero_inpt_dois = document.getElementById('inptDois')
let numero_inpt_tres = document.getElementById('inptTres')
let numero_inpt_quatro = document.getElementById('inptQuatro')
let construcao_torre, destruir_torre
let vida_torre = 100


function construir(){

   construcao_torre = Number(numero_inpt_um.value) + Number(numero_inpt_tres.value)

   numero_inpt_um.value = construcao_torre

   if( numero_inpt_um.value > 0){

      numero_inpt_quatro.value= "ATIVA"


   }
}

function destruir(){

   destruir_torre = Number(numero_inpt_um.value) - Number(numero_inpt_dois.value)

   numero_inpt_um.value = destruir_torre

   if( numero_inpt_um.value <= 0){

   numero_inpt_quatro.value= "DESATIVADA"


}
}
