let user = {
    name: 'Guilherme',
    age: 30
}

module.exports = app => {
    app.route('/user')
        .get((req, res) => {
            res.status(200).send(user)
        })
        .post((req, res) => {
            user = req.body
            res.send({
                message: 'User saved =)'
            })
        })
}