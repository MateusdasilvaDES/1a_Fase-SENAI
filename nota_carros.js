/*  Criar um sistema de comparação de carros, de acordo com a imagem. Devem ser digitadas notas de 0 a 10 para os 3 critérios 
(conforto, economia, design) de cada carro, o que irá gerar uma média com duas casas após a vírgula. Ao clicar em comparar, 
devem ser mostradas a médias de cada carro e o melhor carro (carro com melhor média) nos respectivos campos.
*/

let nota_conforto_um = document.getElementById('NotaConfortoUm')
let nota_conforto_dois = document.getElementById('NotaConfortoDois')
let nota_conforto_tres = document.getElementById('NotaConfortoTres')

let nota_economia_um = document.getElementById('NotaEconomiaUm')
let nota_economia_dois = document.getElementById('NotaEconomiaDois')
let nota_economia_tres = document.getElementById('NotaEconomiaTres')

let nota_design_um = document.getElementById('NotaDesignUm')
let nota_design_dois = document.getElementById('NotaDesignDois')
let nota_design_tres = document.getElementById('NotaDesignTres')

let inpt_ferrari = document.getElementById('MediaFerrari')
let inpt_GTR = document.getElementById('MediaGtr')
let inpt_porsche = document.getElementById('MediaPorsche')

let Media_nota_ferrari, soma_notas_ferrari
let Media_nota_GTR, soma_notas_GTR
let Media_nota_porsche, soma_notas_porsche

let resultado_final = document.getElementById('Resultado')

quantidade_notas = 3

function comparar(){

/* MEDIA DA FERRARI */

soma_notas_ferrari = Number(nota_conforto_um.value) + Number(nota_economia_um.value) + Number(nota_design_um.value)

Media_nota_ferrari = soma_notas_ferrari / quantidade_notas

inpt_ferrari.value = Media_nota_ferrari

/* MEDIA DO GTR-R35 */

soma_notas_GTR = Number(nota_conforto_dois.value) + Number(nota_economia_dois.value)+ Number(nota_design_dois.value)

Media_nota_GTR = soma_notas_GTR / quantidade_notas

inpt_GTR.value = Media_nota_GTR

/* MEDIA DA PORSCHE*/

soma_notas_porsche = Number(nota_conforto_tres.value) + Number(nota_economia_tres.value)+ Number(nota_design_tres.value)

Media_nota_porsche = soma_notas_porsche / quantidade_notas

inpt_porsche.value = Media_nota_porsche


 if(Media_nota_ferrari > Media_nota_GTR && Media_nota_ferrari > Media_nota_porsche){

 resultado_final.value = 'Ferrari'

}

 else if(Media_nota_GTR > Media_nota_ferrari && Media_nota_GTR > Media_nota_porsche){

    resultado_final.value = 'GTR-R35'
    
}

 else if(Media_nota_porsche > Media_nota_GTR && Media_nota_porsche > Media_nota_ferrari){

    resultado_final.value = 'porsche'
    
}
}