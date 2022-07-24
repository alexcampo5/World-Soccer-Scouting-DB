const { League, Player } = require('../models')

const getAllLeagues = async (req, res) => {
  try {
    let allLeagues = await League.find()
    return res.status(200).json({ allLeagues })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllPlayers = async (req, res) => {
  try {
    let allLeagues = await Player.find()
    return res.status(200).json({ allLeagues })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlayerById = async (req, res) => {
  try {
    let { id } = req.params
    let player = Player.findById(id)
    if (!player) {
      return res.status(404).send('This player does not exist')
    }
    return res.status(200).json({ player })
  } catch (error) {
    return res.send(500).send(error.message)
  }
}

module.exports = {
  getAllLeagues,
  getAllPlayers,
  getPlayerById
}
