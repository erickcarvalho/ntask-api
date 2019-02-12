const express = require('express');
const consign = require('consign');

const PORT = 3000;
const app = express();

consign({
    verbose: false
})
    .include('models')
    .then('routes')
    .into(app);

app.listen(PORT, () => console.log(`NTAsk is alive - Porta ${PORT}`));
