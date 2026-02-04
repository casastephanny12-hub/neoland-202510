//import express from 'express' forma en la que se trabajan los modulos.

const express = require('express')

const api = express()

const jsonBodyParser = express.json() //manejador, cuerpo del servidor lo parsea y convierta a objeto 

const people = [
    { id: 'person-0', name: 'Carla', age: 34 },
    { id: 'person-1', name: 'Nohely', age: 26 },
    { id: 'person-2', name: 'Cindy', age: 29 },
]

api.get('/', (req, res) => res.json({ message: 'Hello World from API!' }))

api.get('/people', (req, res) => {
    const personId = req.query.id

    const person = people.find(person => person.id === personId)

    res.json(person)
})

api.post('/people', jsonBodyParser, (req, res) => {

    const person = req.body //tiene el json que enviamos en formato objeto

    people.push(person)

    res.send() //respondemos con un mensaje vacio y te pone un status 200

})


api.listen(8080, () => console.log('API listening on port 8080'))