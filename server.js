const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/pedido', (req, res) => {
    const pedido = req.body;
    console.log("Pedido recebido:", pedido);
    res.json({
        status: "sucesso",
        mensagem: "Pedido processado com sucesso!",
        numeroPedido: Math.floor(Math.random() * 10000) + 1
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});