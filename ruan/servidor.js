// Importar o express
import express from 'express';
const app = express();

// Reconhecer o body/corpo das requisições em JSON
app.use(express.json());

// Criar um objeto para armazenar os livros por gênero
const livros = {
    aventura: [
        { id: 1, nome: 'Indiana Jones, vol. 1' },
        { id: 2, nome: 'Viagem ao Centro da Terra' }
    ],
    suspense: [
        { id: 1, nome: 'O Iluminado' },
        { id: 2, nome: 'Garota Exemplar' }
    ],
    romance: [
        { id: 1, nome: 'Orgulho e Preconceito' },
        { id: 2, nome: 'Romeu e Julieta' }
    ],
    ficcao: [
        { id: 1, nome: 'Duna' },
        { id: 2, nome: '1984' }
    ]
};

// Definir a rota GET para listar todos os livros
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

// Definir a rota POST para adicionar livros de aventura
app.post('/livros/aventura', (req, res) => {
    const { id, nome } = req.body;
    if (id && nome) {
        livros.aventura.push({ id, nome });
        res.status(201).send('Livro de aventura adicionado com sucesso!');
    } else {
        res.status(400).send('Dados inválidos!');
    }
});

// Definir a rota POST para adicionar livros de suspense
app.post('/livros/suspense', (req, res) => {
    const { id, nome } = req.body;
    if (id && nome) {
        livros.suspense.push({ id, nome });
        res.status(201).send('Livro de suspense adicionado com sucesso!');
    } else {
        res.status(400).send('Dados inválidos!');
    }
});

// Definir a rota POST para adicionar livros de romance
app.post('/livros/romance', (req, res) => {
    const { id, nome } = req.body;
    if (id && nome) {
        livros.romance.push({ id, nome });
        res.status(201).send('Livro de romance adicionado com sucesso!');
    } else {
        res.status(400).send('Dados inválidos!');
    }
});

// Definir a rota POST para adicionar livros de ficção
app.post('/livros/ficcao', (req, res) => {
    const { id, nome } = req.body;
    if (id && nome) {
        livros.ficcao.push({ id, nome });
        res.status(201).send('Livro de ficção adicionado com sucesso!');
    } else {
        res.status(400).send('Dados inválidos!');
    }
});

// Definir a rota GET para listar os livros de um gênero específico
app.get('/livros/:genero', (req, res) => {
    const { genero } = req.params;
    if (livros[genero]) {
        res.status(200).json(livros[genero]);
    } else {
        res.status(404).send('Gênero não encontrado!');
    }
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
