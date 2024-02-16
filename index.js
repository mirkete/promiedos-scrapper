import express from 'express'
import { mainRoutes } from './routes/main.js'
import { matchesUpdater } from './utils/dataUpdater.js'

// Create server
const app = express()

// Updater
matchesUpdater()

// Routes
app.use('/', mainRoutes())

app.listen(3001, () => {
  console.log('SERVER ON')
})
