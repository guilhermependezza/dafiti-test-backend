let user = require('../data/user')

module.exports = app => {
    app.route('/user')
        .get((req, res) => {
            res.status(200).send(user)
        })
        .put((req, res) => {
            user = req.body
            res.send({
                message: 'User saved =)',
                user
            })
        })
}