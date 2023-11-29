const express = require('express')

const router = express.Router();

router.use(function time(req, res, next){
    next();
})

router.get('/', (req, res) => {
    res.send("Ta funfando legal!");
})

router.get('/login', (req, res) => {
    res.send('Aqui a tela de login');
})

module.exports = router;