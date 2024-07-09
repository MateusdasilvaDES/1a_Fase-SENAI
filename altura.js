/* Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3cm por ano.
 Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho. */

 let altura_joazinho = 1.75 , altura_pedrinho = 1.60
 let tempo_ano = 0


 while(altura_joazinho > altura_pedrinho){

  altura_joazinho = altura_joazinho + 0.01
  altura_pedrinho = altura_pedrinho + 0.03
  tempo_ano = tempo_ano + 1

 }

 alert('Esse é o tempo que leva para pedrinho passar joaozinho em altura: ' + tempo_ano + ' anos')

