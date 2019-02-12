const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => res.json({status: "NTask API"}));

app.get('/task', (req, res) => {
    res.json({
        task:[
            {title: "Fazer Compras"},
            {title: "Consertar o PC"}
        ]
    })
})

app.listen(PORT, () => console.log(`NTAsk is alive - Porta ${PORT}`))
