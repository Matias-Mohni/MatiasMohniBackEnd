const {Router} = require('express')

const router = Router()

router.use('/', (req, res) => {
    res.render('index', {
        username: 'Matias'
    })
})

module.exports = router