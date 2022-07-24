const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const League = new Schema(
  {
    leagueName: { type: String, required: true },
    logo: { type: String, required: true },
    country: { type: String, required: true },
    numTeams: { type: String, required: true },
    memberTeams: { type: Array }
  },
  { timestamps: true }
)

module.exports = League
