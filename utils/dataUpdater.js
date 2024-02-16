import { scrapMatches } from '../scraping.js'
import fs from 'node:fs/promises'
import path from 'node:path'

async function updateMatchesData () {
  const scrappedData = await scrapMatches()
  const parsedData = JSON.stringify(scrappedData)
  await fs.writeFile(path.join(process.cwd(), 'data', 'matches.json'), parsedData, { encoding: 'utf-8' })

  const lastUpdateDate = new Date(Date.now())
  const updateHours = ('0' + lastUpdateDate.getHours()).slice(-2)
  const updateMinutes = ('0' + lastUpdateDate.getMinutes()).slice(-2)
  console.log(`Matches updated at: ${updateHours}:${updateMinutes}`)
}

export async function matchesUpdater () {
  await updateMatchesData()

  return setInterval(async () => {
    try {
      await updateMatchesData()
    } catch (err) {
      console.log('Matches Update Failed')
    }
  }, 1000 * 60 * 10)
}
