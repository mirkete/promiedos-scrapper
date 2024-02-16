import { Router } from 'express'
import { makeScreen } from '../scraping.js'
import { getMatches } from '../utils/getMatches.js'

function mainRoutes () {
  const mainRouter = Router()

  mainRouter.get('/matches', async (req, res) => {
    const matches = await getMatches()

    res.json(matches)
  })

  mainRouter.get('/screenshot', async (req, res) => {
    const image = await makeScreen('https://www.promiedos.com.ar/')

    res.writeHead(200, {
      'Content-Type': 'image/jpeg'
    })

    return res.end(image)
  })

  return mainRouter
}

export { mainRoutes }
