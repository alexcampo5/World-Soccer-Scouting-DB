const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is the home page'))

router.get('/leagues', controllers.getAllLeagues)
router.get('/players', controllers.getAllPlayers)
router.get('/players/:id', controllers.getPlayerById)
router.get('/leagues/:id', controllers.getLeagueById)
router.post('/players/:id', controllers.addPlayer)
router.delete('/players/:id', controllers.deletePlayer)
router.put('/players/:id', controllers.updatePlayer)

module.exports = router
