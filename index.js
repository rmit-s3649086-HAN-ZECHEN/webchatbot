const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("welcome to home page han!");
});


app.listen(3000, () =>{
    console.log("Hello Han");
});

