let user = {
    userId: 1,
    name: 'Guilherme',
    age: 30,
    phone: '17992635858',
    email: 'guilherme_pendezza@hotmail.com'
}

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