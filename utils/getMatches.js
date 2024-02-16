import fs from 'node:fs/promises'
import path from 'node:path'

export async function getMatches () {
  const dataPath = path.join(process.cwd(), 'data', 'matches.json')
  const options = { encoding: 'utf-8' }
  const data = await fs.readFile(dataPath, options)
  const parsedData = JSON.parse(data)

  return parsedData
}
