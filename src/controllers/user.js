const db = require('../../database/models');

const controller = {
    index: (req, res) => {
        db.Users.findAll()
            .then(result => {
                return res.status(200).json({
                    total: result.length,
                    data: result,
                    status: 200
                })
            })
    },
    find: (req, res) => {
        db.Users.findAll({where: {id: req.params.id}})
            .then(result => {
<<<<<<< HEAD
                return res.status(200).json({
                    total: result.length,
                    data: result,
                    status: 200
                })
=======
                res.json(result);
>>>>>>> 77d387c1bc047a661c5264eaa7b9c5d68111e851
            })
    }
}

module.exports = controller;