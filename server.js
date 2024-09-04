//Esse código todo do server.js, foi o chat gpt que fez para mim.

// Importa o módulo express, que é utilizado para criar o servidor web
const express = require('express');
// Cria uma instância do Express, que será nossa aplicação
const app = express();
// Define a porta onde o servidor vai rodar. Usamos a porta 3000.
const port = 3000;

// Dados das partidas de futebol que vamos disponibilizar através da API
const partidas = [
    { id: 1, partida: 'Grêmio x Inter' },          // Partida 1
    { id: 2, partida: 'Flamengo x Vasco' },        // Partida 2
    { id: 3, partida: 'Inter x Avaí' },            // Partida 3
    { id: 4, partida: 'Flamengo x Grêmio' },       // Partida 4
    { id: 5, partida: 'Real Madrid x Grêmio' },    // Partida 5
    { id: 6, partida: 'Barcelona x Inter' },       // Partida 6
];

// Define a rota para retornar todas as partidas
// Quando o usuário acessar '/partidas', o servidor vai responder com a lista completa de partidas
app.get('/partidas', (req, res) => {
    // Envia a lista de partidas como resposta em formato JSON
    res.json(partidas);
});

// Define a rota para retornar as partidas de um time específico
// O ':time' na URL significa que é uma variável, e o valor passado na URL será capturado
app.get('/:time', (req, res) => {
    const { time } = req.params; // Captura o valor da variável 'time' da URL
    // Filtra as partidas para encontrar aquelas que envolvem o time especificado
    const partidasDoTime = partidas.filter(partida =>
        partida.partida.toLowerCase().includes(time.toLowerCase())
    );
    // Se encontrar partidas do time, envia-as como resposta
    if (partidasDoTime.length > 0) {
        res.json(partidasDoTime);
    } else {
        // Se não encontrar, envia uma mensagem de erro com o status 404 (não encontrado)
        res.status(404).json({ mensagem: 'Nenhuma partida encontrada para o time especificado.' });
    }
});


//app.listen(port, ...) inicia o servidor e o faz ouvir requisições na porta definida. A função de callback 
//exibe uma mensagem no console indicando que o servidor está rodando.

// Inicia o servidor e faz com que ele comece a escutar na porta definida
app.listen(port, () => {
    // Exibe uma mensagem no console indicando que o servidor está rodando
    console.log(`Servidor rodando em http://localhost:${port}`);
});

//Isso é callback function = (req, res) => { ... }