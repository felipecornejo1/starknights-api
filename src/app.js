const db = require('../database/models');

db.Items.findAll()
    .then(result => {
        console.log(result);
    })