const mainRoutes = require('./routes/main');
const planetRoutes = require('./routes/planet');
const itemRoutes = require('./routes/item');
const armorRoutes = require('./routes/armor');
const passRoutes = require('./routes/pass');
const petRoutes = require('./routes/pet');
const weaponRoutes = require('./routes/weapon');
const solarSystemRoutes = require('./routes/solarSystem');
const spaceshipRoutes = require('./routes/spaceship');
const sunRoutes = require('./routes/sun');
const userRoutes = require('./routes/user');

const express = require('express');
const app = express();
const cors = require('cors');

app.listen(process.env.PORT || 3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

app.use(cors());

app.use('/', mainRoutes);
app.use('/armor', armorRoutes);
app.use('/passes', passRoutes);
app.use('/pets', petRoutes);
app.use('/weapons', weaponRoutes);
app.use('/planets', planetRoutes);
app.use('/items', itemRoutes);
app.use('/solar-system', solarSystemRoutes);
app.use('/spaceship', spaceshipRoutes);
app.use('/sun', sunRoutes);
app.use('/user', userRoutes);

