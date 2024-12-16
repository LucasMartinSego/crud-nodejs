const express = require('express');
const app = express(); //incovo express

app.set('view engine', 'ejs'); // defino motor de plantillas

app.use(express.urlencoded({ extended: false }))
app.use(express(JSON))

app.use('/', require('./router')); // defino enrutador

app.listen(5000, () => {
    console.log('SERVER corriendo en http://localhost:5000');
})