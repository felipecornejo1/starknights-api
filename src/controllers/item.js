const db = require('../../database/models');

const controller = {
    index: (req, res) => {
        db.Items.findAll()
            .then(result => {
                res.json(result);
            })
    },
    find: (req, res) => {
        db.Items.findAll({where: {id: req.params.id}})
            .then(result => {
                res.json(result);
            })
    }
}

module.exports = controller;
