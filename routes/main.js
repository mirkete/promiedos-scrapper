import {Router} from "express"
import { makeScreen, obtainMatches } from "../scraping.js"

function mainRoutes(){
    const mainRouter = Router()

    mainRouter.get("/matches", async (req, res) => {
        const matches = await obtainMatches()

        res.json(matches)
    })

    mainRouter.get("/screenshot", async (req, res) => {
        const image = await makeScreen("https://www.cuevana-3.id/")
        
        res.writeHead(200, {
            "Content-Type": "image/jpeg"
        })

        return res.end(image)
    })

    return mainRouter
}

export {mainRoutes}