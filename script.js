/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

//// Dados de entrada do usuário
// optoin
// item

//// variaveis da aplicação
// optoin (number)
// itemsList (array)
// item (string)
// listOfItemsIsEmpty (Boleean)

// tratamento de dados
// 1. Uma estrutura while para a aplicação nao ser encerrada até o usuário digitar "3".
// 2. O método prompt() para receber os dados de entrada do usuário.
// 3. Converter a option para number utilizando o metodo Number().
// 4. Estruturas de flux if() ou switch para as opções do menu.
// 5. Uma estrutura Array para agrupar os itens.
// 6. O metodo push() para adcionar itens na estrutura Array.
// 7. O método alert() para imprimir menssagens para o usuário.

let option = undefined
let itemsList = Array(0)

while (option !== 3) {
  option = Number(
    prompt(`
  Olá usuário! Digite o número da opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `)
  )

  switch (option) {
    case 1:
      let item = prompt('Cadastre um item na lista!')
      itemsList.push(item)
      break

    case 2:
      let listOfItemsisEmpty = itemsList.length === 0
      if (listOfItemsisEmpty) {
        alert('Não existem itens cadastrados')
      } else {
        alert(`Itens cadastrados são:
        ${itemsList}`)
      }
      break

    case 3:
      alert('A aplicação será encerrada, e até a proxima!')
      break

    default:
      alert(`
      Por favor escolha uma das opções fornecidas de acordo com o número!
      `)
      break
  }
}
