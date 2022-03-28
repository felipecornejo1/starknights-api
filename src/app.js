const mainRoutes = require('./routes/main');
const planetRoutes = require('./router/planet');

const express = require('express');
const app = express();

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

app.use('/', mainRoutes);
app.use('/planet', planetRoutes);
app.use('/items', itemRoutes);
