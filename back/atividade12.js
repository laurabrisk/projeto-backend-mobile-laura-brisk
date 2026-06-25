const express = require('express');
const app = express();
const port = 3000;

app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'João', email: 'joao@gmail.com' },
        { id: 2, nome: 'Maria', email: 'maria@gmail.com' },
        { id: 3, nome: 'Pedro', email: 'pedro@gmail.com' }
    ]);
});


app.get('/tarefas', (req, res) => {
    res.json([
        { id: 1, titulo: 'Estudar', status: 'pendente' },
        { id: 2, titulo: 'Trabalhar', status: 'concluída' },
        { id: 3, titulo: 'Academia', status: 'pendente' }
    ]);
});


app.get('/reservas', (req, res) => {
    res.json([
        { id: 1, cliente: 'João', data: '26/06/2026' },
        { id: 2, cliente: 'Maria', data: '27/06/2026' },
        { id: 3, cliente: 'Pedro', data: '28/06/2026' }
    ]);
});


app.get('/status', (req, res) => {
    res.json({ mensagem: 'Sistema ta online!' });
});

app.get('/turmas', (req, res) => {
    res.json([
        { id: 1, nome: 'Turma 3T', alunos: 31 },
        { id: 2, nome: 'Turma 3M', alunos: 35 },
        { id: 3, nome: 'Turma 3Q', alunos: 28

         }
    ]);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


//http://localhost:3000/usuarios - lista usuários
//http://localhost:3000/tarefas - lista tarefas
//http://localhost:3000/reservas - lista reservas
//http://localhost:3000/status - "Sistema ta online!"
//http://localhost:3000/turmas