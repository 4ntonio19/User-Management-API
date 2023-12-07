const express = require('express');
const router = require('./src/routes/router')
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () =>{
    console.log(`A aplicação está rodando na ${port}`);
})

