const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('TA FUNFANDO');
})

app.listen(port, () =>{
    console.log(`A aplicação está rodando na ${port}`);
})

