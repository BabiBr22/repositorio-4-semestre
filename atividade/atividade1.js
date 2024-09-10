// // Atividade de Revisão de JS

// // 1. Escreva um código que verifique se uma pessoa pode votar (idade >= 18) e se é
// // obrigatória a votação (idade >= 18 e idade <= 70).

// // let idade = prompt('Digite sua idade: ')

// // if(idade >= 18 && idade <= 70){
// //     alert('Sua votação é obrigatória')
// // }else{
// //     alert('Você não é obrigado a votar')
// // }
// //--------------------------------------------------

// // 2. Crie um programa que exibe a soma de dois números.

// // let numero1 = Number(prompt('Digite um número: '))
// // let numero2 = Number(prompt('Digite um outro número: '))

// // let soma = numero1 + numero2

// // alert(soma)
// //----------------------------------

// // 3. Escreva um programa que verifica se um número é positivo, negativo ou
// // zero.

// // let numero = Number(prompt('Digite um número: '))

// // if(numero == 0 ){
// //     alert('Esse número é 0')
// // }else if(numero > 0){
// //     alert('Esse número é positivo')
// // }else{
// //     alert('Esse número é negativo')
// // }

// //-------------------------------------------

// // 4. Determine se as seguintes sentenças são proposições (podem ser verdadeiras ou
// // falsas).

// // ○ ( ) "O céu é azul."
// // ○ ( ) "Abra a porta."
// // ○ ( ) "2 + 2 = 4."
// // ○ ( ) "Vamos ao cinema amanhã."

// // let escolha = Number(prompt('Digite sua escolha: \n (1) "O céu é azul. \n (2) "Abra a porta. \n (3) "2 + 2 = 4. \n (4) "Vamos ao cinema amanhã.'))

// // switch(escolha){
// //     case 1:
// //           alert("É uma proposição")
// //     break
// //     case 2:
// //          alert("Não é uma preposição")
// //     break
// //     case 3:
// //          alert("É uma preposição")
// //     break
// //     case 4:
// //          alert("Não é uma preposição")
// //     break
// //     default: 
// //          alert('Algo deu errado!')
// // }

// //---------------------------------------------

// // 5. Exercício de Mutabilidade

// // a. Crie um array chamado meuArray com os valores [1, 2, 3].
// // b. Altere o primeiro elemento do array para 4 e imprima o array no console.
// // c. Crie uma string chamada minhaString com o valor "Olá".
// // d. Tente alterar o primeiro caractere da string para "o" e imprima a string no
// // console. O que acontece? Explique.

// // let meuArray = [1, 2, 3]
// // meuArray[0] = 4 

// // console.log(meuArray)

// let minhaString = "Olá";

// // Isso não funciona
// // minhaString[0] = 'o'; // Não altera a string

// // A maneira correta seria criar uma nova string
// let novaString = 'o' + minhaString.slice(1);
// console.log(novaString); // Saída: "olá"


// //-------------------------------------------

// // 6. Exercício de Conversão de Tipos

// // a. Dado um array de números, use o método map para criar um novo array
// // onde cada número é convertido para uma string.
// // b. Entrada: [1, 2, 3, 4, 5]
// // c. Saída Esperada: ["1", "2", "3", "4", "5"]

// let numeros = [1, 2, 3, 4, 5];
// let strings = numeros.map(String);
// console.log(strings); // Saída: ["1", "2", "3", "4", "5"]


// //------------------------------------

// // 7. Exercício de Manipulação de Strings

// // a. Dado um array de strings, use o método map para criar um novo array onde
// // cada string é convertida para maiúsculas.
// // b. Entrada: ["maçã", "banana", "laranja"]
// // c. Saída Esperada: ["MAÇÃ", "BANANA", "LARANJA"]

// let frutas = ["maçã", "banana", "laranja"];
// let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
// console.log(frutasMaiusculas); // Saída: ["MAÇÃ", "BANANA", "LARANJA"]

// //--------------------------------------

// // 8. Escreva uma função em JavaScript que recebe um objeto representando uma
// // pessoa com propriedades nome e idade, e retorna uma string no formato "Nome:
// // [nome], Idade: [idade]".

// function descreverPessoa(pessoa) {
//     return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`;
// }

// // Exemplo de uso:
// let pessoa = { nome: 'Ana', idade: 30 };
// console.log(descreverPessoa(pessoa)); // Saída: "Nome: Ana, Idade: 30"



// //---------------------------------

// // 9. Crie uma função que recebe um array de objetos, onde cada objeto representa um
// // livro com propriedades titulo e autor. A função deve retornar um array contendo
// // apenas os títulos dos livros cujos autores têm mais de 5 caracteres em seu nome.

// function filtrarLivrosPorAutor(livros) {
//     return livros
//         .filter(livro => livro.autor.length > 5)
//         .map(livro => livro.titulo);
// }

// // Exemplo de uso:
// let livros = [
//     { titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
//     { titulo: 'Harry Potter', autor: 'J.K. Rowling' },
//     { titulo: '1984', autor: 'George Orwell' }
// ];
// console.log(filtrarLivrosPorAutor(livros)); // Saída: ["O Senhor dos Anéis", "Harry Potter"]


// //------------------------------

// // 10. Crie uma função que recebe um objeto representando um carro com as
// // propriedades marca, modelo, e ano. A função deve retornar uma string com uma
// // breve descrição do carro no formato "O carro é um [ano] [marca] [modelo]".

// function descreverCarro(carro) {
//     return `O carro é um ${carro.ano} ${carro.marca} ${carro.modelo}`;
// }

// // Exemplo de uso:
// let carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2020 };
// console.log(descreverCarro(carro)); // Saída: "O carro é um 2020 Toyota Corolla"


