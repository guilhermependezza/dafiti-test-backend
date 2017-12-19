let addressList = [{
    userId: 1,
    street: 'Acacia Avenue',
    number: '22'
}, {
    userId: 1,
    street: 'Frei Inácio da Conceição',
    number: '629'
}]

module.exports = app => {
    app.route('/address-list/:userId')
        .get((req, res) => {
            console.log(req.params)
            res.send(addressList.filter(a => a.userId == req.params.userId))
        })
}