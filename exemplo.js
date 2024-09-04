// const nomes = [ 'ruan', 'jogo', 'paulo', 'pedro']
// const nomesComP = nomes.filter(item => item.includes('p'))
// console.log(nomesComP)

// const partidas = [
//     {id : 1, partida: 'inter x gremio'},
//     {id : 2, partida: 'corinthians x inter'},
//     {id : 3, partida: 'inter x flamengo'},
//     {id : 4, partida: 'inter x gremio'},
//     {id : 5, partida: 'inter x gremio'},
//     {id : 6, partida: 'inter x gremio'},
// ]

// const partidasFiltradas = partidas.filter(item =>{
//     console.log('Analisando item', item.id)
//     return item.partida.toLocaleLowerCase().includes('corin')
// } )

// console.log(partidasFiltradas)

const nomeComBarra = '/ru/an'
const nomeSemBarra = nomeComBarra.replaceAll('/', '')
//replace permite que a gente substitua algo por outra coisa, mas a primeira só
//replaceAll permite excluir tudo

console.log(nomeSemBarra)