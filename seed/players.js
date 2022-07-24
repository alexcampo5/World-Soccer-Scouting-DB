const db = require('../db')
const { Player, League } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  let prem = await League.findById('62dd99d1c6a26b84bb6f0805')
  let ligue1 = await League.findById('62dd99d1c6a26b84bb6f0806')
  let laLiga = await League.findById('62dd99d1c6a26b84bb6f0807')
  let serieA = await League.findById('62dd99d1c6a26b84bb6f0808')
  let bundes = await League.findById('62dd99d1c6a26b84bb6f0809')

  const players = [
    {
      playerName: 'Mohammed Salah',
      image:
        'https://fbref.com/req/20220707/images/headshots/e342ad68_2018.jpg',
      age: '30',
      nationality: 'Egypt',
      height: `5'9"`,
      skills: ['pace', 'finishing', 'dribbling'],
      club: 'Liverpool',
      league: prem[0]._id
    },
    {
      playerName: 'Jordan Henderson',
      image:
        'https://fbref.com/req/20220707/images/headshots/935e6b8f_2018.jpg',
      age: '32',
      nationality: 'England',
      height: `5'11"`,
      skills: ['passing', 'stamina', 'leadership'],
      club: 'Liverpool',
      league: prem[0]._id
    },
    {
      playerName: `Kylian Mbappé`,
      image:
        'https://fbref.com/req/20220707/images/headshots/42fd9c7f_2018.jpg',
      age: '23',
      nationality: 'France',
      height: `5'10"`,
      skills: ['speed', 'finishing', 'dribbling'],
      club: 'PSG',
      league: ligue1[0]._id
    }
  ]

  await Player.insertMany(players)
  console.log('Players seeded.')
}

const run = async () => {
  await main()
  db.close()
}

run()
