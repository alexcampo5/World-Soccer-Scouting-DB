const db = require('../db')

const { League } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const leagues = [
    {
      leagueName: 'Premier League',
      country: 'England',
      numTeams: '20',
      memberTeams: []
    },
    {
      leagueName: 'Ligue 1',
      country: 'France',
      numTeams: '20',
      memberTeams: []
    },
    {
      leagueName: 'La Liga',
      country: 'Spain',
      numTeams: '20',
      memberTeams: []
    },
    {
      leagueName: 'Serie A',
      country: 'Italy',
      numTeams: '20',
      memberTeams: []
    },
    {
      leagueName: 'Bundesliga',
      country: 'Germany',
      numTeams: '20',
      memberTeams: []
    }
  ]
  await League.insertMany(leagues)
  console.log('Leagues seeded.')
}

const run = async () => {
  await main()
  db.close()
}

run()
