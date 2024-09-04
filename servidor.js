//Esse código inteiro do servidor.js, foi o professor Ruan que fez com a gente.
const http = require('http')

const partidas = [
    {id : 1, partida: 'gremio x inter'},
    {id : 1, partida: 'corinthias x palmeiras'},
    {id : 1, partida: 'corinthias x inter'},
    {id : 1, partida: 'gremio x palmeiras'}
]

//da para usar esse aqui em vez do de cima
// import http from 'http'
// no package.json adicionar type: 

const servidor = http.createServer((req, res) =>{
    //Conteúdo do servidor
    const url = req.url
    switch(url){
        case '/partidas' : 
            res.writeHead(200)
            res.end(JSON.stringify(partidas))
            break
        default:
            const nomeTime = url.replaceAll('/','')
            const partidasDoTime = partidas.filter(item => item.partida.includes(nomeTime))
            if(partidasDoTime.length > 0){
                res.writeHead(200)
                res.end(JSON.stringify({partidas: partidasDoTime}))
            }else{
                res.writeHead(200)
                res.end(JSON.stringify({ mensagem: 'Time não localizado'}))
            }
    }
})

servidor.listen(3000, 'localHost', () => {
    console.log('Servidor rodando')
})


//node --watch {nome do servidor}= cada modificação feita no código ele atualiza sozinho