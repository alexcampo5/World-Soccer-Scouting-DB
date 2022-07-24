const { model } = require('mongoose')
const LeagueSchema = require('./league')
const PlayerSchema = require('./player')

const League = model('League', LeagueSchema)
const Player = model('Player', PlayerSchema)

module.exports = {
  League,
  Player
}
