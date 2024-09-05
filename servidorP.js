// Importa o módulo 'express', que é um framework para construir APIs em Node.js
const express = require('express');

// Cria uma instância do 'express' para configurar e criar as rotas do servidor
const app = express();

// Define a porta onde o servidor irá rodar
const port = 3000;

// Cria uma lista de compras inicial. Cada compra é um objeto com 'id', 'descricao' e 'preco'
let compras = [
    { id: 1, descricao: 'PlayStation 5', preco: 5000.00 },
    { id: 2, descricao: 'Camisa do Grêmio', preco: 250.99 },
    { id: 3, descricao: 'Coxinha do Araújo', preco: 7.65 }
];

// Middleware para permitir que o servidor aceite e processe dados no formato JSON
// Isso é necessário para que as requisições POST enviem dados no corpo da requisição (req.body)
app.use(express.json());

// Endpoint para listar todas as compras cadastradas
// Rota: GET /compras
// Quando um cliente fizer uma requisição GET para /compras, a função irá responder com a lista de compras no formato JSON
app.get('/compras', (req, res) => {
    // Responde com a lista de compras armazenada na variável 'compras'
    res.json(compras);
});

// Endpoint para cadastrar uma nova compra
// Rota: POST /cadastrar-compra
// O cliente deve enviar um objeto com 'id', 'descricao' e 'preco' no corpo da requisição
app.post('/cadastrar-compra', (req, res) => {
    // Extrai os dados 'id', 'descricao' e 'preco' do corpo da requisição (req.body)
    const { id, descricao, preco } = req.body;

    // Valida se todos os campos foram fornecidos
    // Se qualquer campo estiver faltando, retorna uma resposta de erro (status 400 - Bad Request)
    if (!id || !descricao || !preco) {
        return res.status(400).json({ message: 'Dados incompletos' });
    }

    // Se os dados estiverem corretos, adiciona a nova compra ao array 'compras'
    compras.push({ id, descricao, preco });

    // Retorna uma resposta confirmando o cadastro da compra e mostra o objeto cadastrado
    res.json({ message: 'Compra cadastrada com sucesso!', compra: { id, descricao, preco } });
});

// Endpoint para deletar uma compra específica pelo ID
// Rota: DELETE /deletar-compra/:id
// O cliente deve fornecer o 'id' da compra que deseja deletar na URL
app.delete('/deletar-compra/:id', (req, res) => {
    // Extrai o 'id' da compra a ser deletada a partir dos parâmetros da URL
    const id = parseInt(req.params.id);

    // Filtra o array 'compras' para remover o item com o ID correspondente
    // Se o ID da compra for diferente do ID fornecido, a compra permanece na lista
    const comprasFiltradas = compras.filter(compra => compra.id !== id);

    // Se o tamanho da lista não mudar após o filtro, significa que o ID não foi encontrado
    if (comprasFiltradas.length === compras.length) {
        return res.status(404).json({ message: 'Compra não encontrada' });
    }

    // Atualiza o array 'compras' com a nova lista (sem o item deletado)
    compras = comprasFiltradas;

    // Retorna uma resposta confirmando a exclusão da compra
    res.json({ message: 'Compra deletada com sucesso!' });
});

// Endpoint para calcular o valor total de todas as compras cadastradas
// Rota: GET /valor-total
// Calcula a soma de todos os preços das compras e retorna o total
app.get('/valor-total', (req, res) => {
    // Usa o método 'reduce' para somar o valor de todas as compras
    // 'acc' é o acumulador que guarda a soma, e 'compra' é o item atual do array que está sendo somado
    const total = compras.reduce((acc, compra) => acc + compra.preco, 0);

    // Retorna o valor total das compras
    res.json({ total });
});

// Inicia o servidor e o faz escutar requisições na porta definida (3000)
// O segundo parâmetro é uma função de callback que será chamada quando o servidor iniciar
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
