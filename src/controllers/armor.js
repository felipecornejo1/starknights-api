const db = require('../../database/models');

const controller = {
    index: (req, res) => {
        db.Armor.findAll()
            .then(result => {
                res.json(result);
            })
    },
    find: (req, res) => {
        db.Armor.findAll({where: {id: req.params.id}})
            .then(result => {
                res.json(result);
            })
    }
}

module.exports = controller;
