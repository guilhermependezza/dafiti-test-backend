let addressList = [{
    userId: 1,
    street: 'Acacia Avenue',
    number: '22',
    city: 'Catanduva',
    state: 'SP'

}, {
    userId: 1,
    street: 'Frei Inácio da Conceição',
    number: '629',
    city: 'São Paulo',
    state: 'SP'
}]

module.exports = app => {
    app.route('/address-list/:userId')
        .get((req, res) => {
            res.send(addressList.filter(a => a.userId == req.params.userId))
        })
}