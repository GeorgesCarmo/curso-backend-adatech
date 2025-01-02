import express from 'express'
import { config } from 'dotenv'
//import {readFileSync} from 'fs'
//import path from 'path'

interface IUser {
    name: string
    age: number
}

config()
const app = express()
//app.use('/client', express.static(path.join(__dirname, 'public')))
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3300
const users: IUser[] = [
    {
        name: 'Fulano',
        age: 20
    },
    {
        name: 'Ciclano',
        age: 35
    },
]

app.get('/api', (request: any, response: any) => {
    // const homePagePath = path.join(__dirname, 'home.html')
    // const homePage = readFileSync(homePagePath)
    return response.send('<h1>Hello World</h1><p>Hello New World')
    // return response.status(200).send(homePage)
})

app.get('/api/users', (request: any, response: any) => {
    return response.json(users)
})

app.listen(port,() => {
    console.log(`Servidor rodando no endereço ${url}:${port}`)
})