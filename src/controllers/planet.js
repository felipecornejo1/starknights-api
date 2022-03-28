const db = require('../../database/models');

const controller = {
    index: (req, res) => {
        db.Planets.findAll()
            .then(result => {
                res.json(result);
            })
    },
    find: (req, res) => {
        db.Planets.findAll({where: {id: req.params.id}})
            .then(reqsult => {
                res.json(result);
            })
    }
}

module.exports = controller;