const productList = require('../data/products');

const productRoutesConfig = [{
    path: 'wishlist',
    fieldToFilter: 'wishlist'
}, {
    path: 'order-history',
    fieldToFilter: 'ordered'
}]

module.exports = app => {
    productRoutesConfig.forEach(c => {
        app.route(`/${c.path}/:userId`)
            .get((req, res) => {
                res.send(productList.filter(p => p.userId == req.params.userId && p[c.fieldToFilter] === true))
            })
    })
}