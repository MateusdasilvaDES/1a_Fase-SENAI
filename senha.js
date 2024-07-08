/* Crie um programa que solicite a senha de um usuário e depois, peça 
pra digitar novamente até que as duas senhas sejam correspondentes.*/

let senha_login
let senha_cadastro

senha_cadastro = Number(prompt('crie uma senha para cadastro: '))

while(senha_cadastro != senha_login){

senha_login = Number(prompt('Digite sua senha de cadastro: '))

if(senha_cadastro != senha_login){

alert('Sua senha esta errada digite novamente!')
}else{

alert('Sua senha esta correta!')

 }
}
