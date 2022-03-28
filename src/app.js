const itemRoutes = require('./routes/item');
const armorRoutes = require('./routes/armor');
const passRoutes = require('./routes/pass');
const petRoutes = require('./routes/pet');
const weaponRoutes = require('./routes/weapon');

const express = require('express');
const app = express();

app.listen(process.env.PORT || 3030, () => {
    console.log('Servidor corriendo en el puerto 3030');
});

app.use('/items', itemRoutes);
app.use('/armor', armorRoutes);
app.use('/passes', passRoutes);
app.use('/pets', petRoutes);
app.use('/weapons', weaponRoutes);