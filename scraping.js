import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ headless: 'new' })

async function obtainMatchesData (leagues) {
  const data = leagues.map((el) => {
    const leagueData = {}

    const leagueName = el.childNodes[1].textContent
    const leagueChilds = Array.from(el.childNodes).slice(2)
    const leagueMatches = leagueChilds.filter((el) => {
      return !el.className && el.nodeName === 'TR'
    })

    const matchesData = leagueMatches.map((match) => {
      const teams = Array.from(match.getElementsByClassName('game-t1')).map((el) => el.textContent)
      const localGoals = Array.from(match.getElementsByClassName('game-r1'))[0].textContent
      const visitorGoals = Array.from(match.getElementsByClassName('game-r2'))[0].textContent
      // const penalties = match.getElementsByClassName("pen").length > 0 ? match.getElementsByClassName("pen") : ["", ""]

      const matchData = {
        local: {
          name: teams[0],
          goals: localGoals
        },
        visitor: {
          name: teams[1],
          goals: visitorGoals
        }
      }

      return matchData
    })

    leagueData.name = leagueName
    leagueData.matches = matchesData

    return leagueData
  })

  return data
}

async function scrapMatches () {
  const page = await browser.newPage()
  await page.setViewport({ width: 1360, height: 765 })
  await page.goto('https://www.promiedos.com.ar/', { waitUntil: 'domcontentloaded' })

  const leagueMatches = await page.$$eval('#partidos >>> tbody', obtainMatchesData)

  await page.close()

  return { leagueMatches }
}

async function makeScreen (url) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1360, height: 765 })
  await page.goto(url)

  const imageBuffer = await page.screenshot()

  await page.close()

  return imageBuffer
}

const functions = {
  scrapMatches,
  makeScreen
}

if (process.argv[2] === '-run') {
  const localFunction = functions[process.argv[3]]
  const localArguments = process.argv[4]

  localFunction ? console.log(await localFunction(localArguments)) : console.log('La funcion no existe')
}

export { makeScreen, scrapMatches }
