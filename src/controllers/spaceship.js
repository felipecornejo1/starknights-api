const db = require('../../database/models');

const controller = {
    index: (req, res) => {
        db.Spaceships.findAll()
            .then(result => {
                return res.status(200).json({
                    total: result.length,
                    data: result,
                    status: 200
                })
            })
    },
    find: (req, res) => {
        db.Spaceships.findAll({where: {id: req.params.id}})
            .then(reqsult => {
                return res.status(200).json({
                    total: result.length,
                    data: result,
                    status: 200
                })
            })
    }
}

module.exports = controller;