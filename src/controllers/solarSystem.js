const db = require('../../database/models');

const controller = {
    index: (req, res) => {
        db.SolarSystems.findAll()
            .then(result => {
                res.json(result);
            })
    },
    find: (req, res) => {
        db.SolarSystems.findAll({where: {id: req.params.id}})
            .then(reqsult => {
                res.json(result);
            })
    }
}

module.exports = controller;