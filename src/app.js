const itemRoutes = require('./routes/item');

const express = require('express');
const app = express();

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

app.use('/items', itemRoutes);