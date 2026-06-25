const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Canto do Saber</h1>
        <h2>Laura Brisk</h2>
        <p>Bem-vindo ao Canto do Saber!</p>
        <p>📖 <a href="/sobre">Sobre</a> | 👥 <a href="/equipe">Equipe</a> | 📧 <a href="/contato">Contato</a></p>
    `);
});

app.get('/sobre', (req, res) => {
    res.send(`
        <h1>Sobre o Projeto</h1>
        <p>"O projeto foi criado com intuito de ajudar os alunos a aprenderem de fato nas escolas, pois muitos tem seu próprio ritmo e jeito de aprender, sendo assim, muitas vezes não compreendem na sala de aula, então o nosso objetivo é ajudar quem tem dificuldade ou até por vergonha não pergunta."</p>
        <p><a href="/">⬅ Voltar</a></p>
    `);
});


app.get('/equipe', (req, res) => {
    res.send(`
        <h1>Nossa Equipe</h1>
        <p><strong>Danielly</strong> e <strong>Laura Brisk</strong> - Juntas para tornar o aprendizado mais acessível!</p>
        <p><a href="/">⬅ Voltar</a></p>
    `);
});


app.get('/contato', (req, res) => {
    res.send(`
        <h1>Contato</h1>
        <p><strong>"Estamos aqui para ouvir você! Se tiver dúvidas, sugestões ou quiser compartilhar sua experiência, entre em contato conosco."</strong></p>
        <p><a href="/">⬅ Voltar</a></p>
    `);
});


app.listen(PORT, () => {
    console.log(`🚀 Servidor: http://localhost:${PORT}`);
    console.log(`📖 Sobre: http://localhost:${PORT}/sobre`);
    console.log(`👥 Equipe: http://localhost:${PORT}/equipe`);
    console.log(`📧 Contato: http://localhost:${PORT}/contato`);
});