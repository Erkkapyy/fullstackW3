require("dotenv").config()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
var morgan = require("morgan")
const Person = require("./models/person")

app.use(express.static("build"))
app.use(bodyParser.json())

morgan.token("person", function lmao(req) {
  return JSON.stringify(req.body)
})

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :person"
  )
)

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Martti Tienari",
    number: "040-123456",
    id: 2
  },
  {
    name: "Arto Järvinen",
    number: "040-123456",
    id: 3
  },
  {
    name: "Lea Kutvonen",
    number: "040-123456",
    id: 4
  },
  {
    name: "testimeemi",
    number: "1337",
    id: 5
  }
]
/*
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === "CastError" && error.kind == "ObjectId") {
    return response.status(400).send({ error: "malformatted id" })
  }

  next(error)
}

app.use(unknownEndpoint)*/

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>")
})

app.get("/info", (req, res) => {
  Person.find({})
    .then(persons => {
      res.send(`<p>Puhelinluettelossa ${persons.length} henkilön tiedot</p>
  <p>${Date()}</p>`)
    })
    .catch(error => next(error))
  /*res.send(`<p>Puhelinluettelossa ${persons.length} henkilön tiedot</p>
  <p>${Date()}</p>`)*/
})

app.get("/api/persons", (req, res) => {
  Person.find({})
    .then(persons => {
      res.json(persons)
    })
    .catch(error => next(error))
  /*res.json(persons)*/
})

app.get("/api/persons/:id", (req, res) => {
  Person.findById(req.params.id)
    .then(person => {
      if (person) {
        res.json(person.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
  /*const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }*/
})

app.post("/api/persons", (request, response) => {
  const body = request.body

  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({
      error: "name or number missing"
    })
  }

  if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({
      error: "name must be unique"
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * Math.floor(2147000000))
  })

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })

  /*persons = persons.concat(person)

  response.json(person)*/
})

app.delete("/api/persons/:id", (req, res) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body

  const person = {
    name: body.name,
    number: body.number,
    id: body.id
  }
  console.log("findbyupdate mikset toimi")
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
