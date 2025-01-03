import express from "express"
import { config } from 'dotenv'
import path from "path"
import { userRouter } from "./routes/userRoutes"
import cors from 'cors'

config()
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
const url = process.env.API_BASE_URL ?? 'http://localhost/api'
const port = process.env.API_PORT ?? 3300
//const dbJsonPath = path.resolve(process.cwd(), 'server.json')
//const dbJson = readFileSync(dbJsonPath)
//const users: User[] = JSON.parse(dbJson.toString()).users

//const users: User[] = dbJson.users

app.get('/api', (request: any, response: any) => {
    return response.status(200).send('<h1>Hello World</h1><p>Hello New World')
})

app.use(userRouter)

app.listen(port,() => {
    console.log(`Servidor rodando no endereço ${url}:${port}`)
})