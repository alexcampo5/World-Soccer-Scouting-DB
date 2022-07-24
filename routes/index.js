const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is the home page'))

router.get('/leagues', controllers.getAllLeagues)
router.get('/players', controllers.getAllPlayers)
router.get('/players/:id', controllers.getPlayerById)

module.exports = router
