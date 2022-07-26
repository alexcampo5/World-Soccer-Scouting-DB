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
    let player = await Player.findById(id)
    if (!player) {
      return res.status(404).send('This player does not exist')
    }
    return res.status(200).json({ player })
  } catch (error) {
    return res.send(500).send(error.message)
  }
}

const getLeagueById = async (req, res) => {
  try {
    let { id } = req.params
    let league = await League.findById(id)
    if (!league) {
      return res.status(404).send('This league does not exist')
    }
    return res.status(200).json({ league })
  } catch (error) {
    return res.send(500).sendStatus(error.message)
  }
}

const addPlayer = async (req, res) => {
  try {
    const player = await new Player(req.body)
    await player.save()
    return res.status(201).json({ player })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Player.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Plant Deleted')
    }
    throw new Error('Player not found.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePlayer = async (req, res) => {
  try {
    const id = req.params
    await Player.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, player) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!player) {
          res.status(500).send('Player not found!')
        }
        return res.status(200).json(player)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
  }

  //Other way to do this:
  //   try{
  //     const id = req.params
  //     //creating a new object that is being updated via the body of the request
  //     const updatedObject = await Player.update(req.body, {
  //       //targeting the specific objects by its id
  //       where: {id: id},
  //       //sends back updated version
  //       returning: true
  //     })
  //     res.send(updatedObject)
  //   }catch (error){
  //     throw error
  //   }
}

module.exports = {
  getAllLeagues,
  getAllPlayers,
  getPlayerById,
  getLeagueById,
  addPlayer,
  deletePlayer,
  updatePlayer
}
