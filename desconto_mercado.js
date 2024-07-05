/*Criar um sistema para compra de produtos + desconto, com HTML e JS.
O sistema deve deve seguir o layout anexo (imagem).

  - O usuário deverá informar dados de 4 produtos (descrição, quantidade e valor).
  - Um percentual de desconto deve ser informado.
  - Ao final deve ser mostrado o valor total da compra com o desconto.*/

  let quantidade_produtos_um = document.getElementById('quantidadeUm')
  let quantidade_produtos_dois = document.getElementById('quantidadeDois')
  let quantidade_produtos_tres = document.getElementById('quantidadeTres')
  let quantidade_produtos_quatro = document.getElementById('quantidadeQuatro')
  
  let valor_produto_um = document.getElementById('valorUm')
  let valor_produto_dois = document.getElementById('valorDois')
  let valor_produto_tres = document.getElementById('valorTres')
  let valor_produto_quatro = document.getElementById('valorQuatro')
  let valor_desconto = document.getElementById('percentualDesconto')
  let valor_final = document.getElementById('valorFinal')
  
  let valor_total_um, valor_total_dois, valor_total_tres, valor_total_quatro
  let valor_total_compra, percentual_desconto, valor_final_desconto
  let valor_final_compra

  function Calcular(){

  
  // DESCOBRINDO O VALOR TOTAL DA COMPRA 

  valor_total_um = Number(quantidade_produtos_um.value) * Number(valor_produto_um.value)

  valor_total_dois = Number(quantidade_produtos_dois.value) * Number(valor_produto_dois.value)

  valor_total_tres = Number(quantidade_produtos_tres.value) * Number(valor_produto_tres.value)

  valor_total_quatro = Number(quantidade_produtos_quatro.value) * Number(valor_produto_quatro.value)

  valor_total_compra =  valor_total_um + valor_total_dois + valor_total_tres + valor_total_quatro

  // DESCOBRINDO O DESCONTO DA COMPRA

  percentual_desconto = valor_desconto.value / 100
  
  valor_final_desconto = valor_total_compra * percentual_desconto

  // DESCOBRINDO O VALOR TOTAL DA COMPRA COM DESCONTO

  valor_final_compra = valor_total_compra - valor_final_desconto
  
  valor_final.value = valor_final_compra
  }
