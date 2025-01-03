import { Router } from "express"
import { randomUUID } from "crypto"
import path from "path"
import dbJson from "../server.json"
import { writeFile } from "fs/promises"
import { writeFileSync } from "fs"

type User = {
    id: string
    name: string
    age: number
}

type CreateUserDTO = Omit<User, 'id'>

const dbJsonPath = path.resolve(process.cwd(), 'server.json')
const users = dbJson.users
const userRouter = Router()

userRouter.get('/api/users', (request: any, response: any) => {
    return response.json(users)
})

userRouter.post('/api/users', (request: any, response: any) => {
    const {name, age}: CreateUserDTO = request.body

    if(!name || age < 0) {
        const errorMessage = 'O usuário a ser criado precisa ter um nome e idade maior ou igual a 0'
        return response.status(400).send({errorMessage})
    }
    const user = {
        id: randomUUID(),
        name,
        age
    }
    users.push(user)
    writeFileSync(dbJsonPath, JSON.stringify({...dbJson,users}))
    return response.status(201).json(user)
})

userRouter.delete('/api/users/:id', async (request: any, response: any) => {
    const {id} = request.params

    if(!id) {
        return response.status(400).json({error: 'ID não informado'})
    }

    const foundUser = users.find((user) => user.id === id)

    if(!foundUser) {
        return response.status(404).json({error: 'Usuário não encontrado'})
    }

    const updatedUsers = users.filter((user) => user.id !== id)

    await writeFile(dbJsonPath, JSON.stringify({...dbJson, users: updatedUsers}))
    return response.status(204).json()
})

export { userRouter }
//module.exports = userRouter