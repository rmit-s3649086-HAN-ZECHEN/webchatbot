const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("welcome to home page han!");
});

const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://${host}:${port}');
});

