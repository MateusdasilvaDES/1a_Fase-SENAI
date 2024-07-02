
let nota_inpt_um = document.getElementById('InptUm')
let nota_inpt_dois= document.getElementById('InptDois')
let nota_inpt_tres = document.getElementById('InptTres')
let soma_numeros, media_das_notas
let quantidade_notas = 3

function MediaNotas(){

 soma_numeros = Number(nota_inpt_um.value) + Number(nota_inpt_dois.value) + Number(nota_inpt_tres.value)
 media_das_notas = soma_numeros / quantidade_notas

 alert('Essa é a media das notas: ' + media_das_notas)

}
