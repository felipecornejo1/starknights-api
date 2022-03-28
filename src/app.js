const mainRoutes = require('./routes/main');
const planetRoutes = require('./routes/planet');
const itemRoutes = require('./routes/item');
const solarSystemRoutes = require('./routes/solarSystem');
const spaceshipRoutes = require('./routes/spaceship');
const sunRoutes = require('./routes/sun');
const userRoutes = require('./routes/user');

const express = require('express');
const app = express();

app.listen(3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

app.use('/', mainRoutes);
app.use('/planets', planetRoutes);
app.use('/items', itemRoutes);
app.use('/solar-system', solarSystemRoutes);
app.use('/spaceship', spaceshipRoutes);
app.use('/sun', sunRoutes);
app.use('/user', userRoutes);

