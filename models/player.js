const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Player = new Schema(
  {
    playerName: { type: String, required: true },
    image: { type: String, required: true },
    age: { type: String, required: true },
    nationality: { type: String, required: true },
    height: { type: String, required: true },
    skills: { type: Array, required: true },
    league: [{ type: Schema.Types.ObjectId, ref: 'league' }]
  },
  { timestamps: true }
)

module.exports = Player
