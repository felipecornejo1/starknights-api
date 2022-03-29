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
<<<<<<< HEAD
            .then(reqsult => {
                return res.status(200).json({
                    total: result.length,
                    data: result,
                    status: 200
                })
=======
            .then(result => {
                res.json(result);
>>>>>>> 77d387c1bc047a661c5264eaa7b9c5d68111e851
            })
    }
}

module.exports = controller;