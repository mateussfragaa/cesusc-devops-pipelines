const express = require('express');
const app = express();

app.get('/index', (req, res) => {
    res.sendFile('views/index.html', { root: __dirname })
})

app.listen(3000, () => {
    console.log('Example app listening on port: ' + 3000)
})