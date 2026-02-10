//import express from 'express' forma en la que se trabajan los modulos.

const express = require('express')

const { logic } = require('./logic')

const api = express()

const jsonBodyParser = express.json() //manejador, cuerpo del servidor lo parsea y convierta a objeto 

const people = [
    { id: 'person-0', name: 'Carla', age: 34 },
    { id: 'person-1', name: 'Nohely', age: 26 },
    { id: 'person-2', name: 'Cindy', age: 29 },
]

api.get('/', (req, res) => res.json({ message: 'Hello World from API!' }))

api.post('/users', jsonBodyParser, (req, res) => {

    try {
        const { name, email, username, password, passwordRepeat } = req.body

        logic.registerUser(name, email, username, password, passwordRepeat)

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.post('/users/auth', jsonBodyParser, (req, res) => {

    try {
        const { username, password } = req.body

        const userId = logic.authenticateUser(username, password)

        res.send(userId)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.post('/pets', jsonBodyParser, (req, res) => {

    try {

        const userId = req.headers.authorization.slice(6)

        const { name, birthdate, weight, image } = req.body

        logic.addPet(userId, name, birthdate, weight, image)

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.get('/pets', (req, res) => {
    try {
        const userId = req.headers.authorization.slice(6)

        const pets = logic.getPets(userId)

        res.json(pets)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.delete('/pets/:petId', (req, res) => {
    try {
        const userId = req.headers.authorization.slice(6)

        const { petId } = req.params

        logic.removePet(userId, petId)

        res.status(204).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})



api.listen(8080, () => console.log('API listening on port 8080'))