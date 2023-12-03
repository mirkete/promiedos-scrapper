import express from "express"
import { mainRoutes } from "./routes/main.js"

const app = express()

app.use("/", mainRoutes())

app.listen(3000, () => {
    console.log("SERVER ON")
})