const express = require("express")
const app = express()
const bodyParser = require("body-parser")
var morgan = require("morgan")

app.use(bodyParser.json())

/*morgan.token("person", function lmao(req) {
  return JSON.stringify(req.body)
})

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :person"
  )
)*/

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

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>")
})

app.get("/info", (req, res) => {
  res.send(`<p>Puhelinluettelossa ${persons.length} henkilön tiedot</p>
  <p>${Date()}</p>`)
})

app.get("/api/persons", (req, res) => {
  res.json(persons)
})

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
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

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * Math.floor(2147000000))
  }

  persons = persons.concat(person)

  response.json(person)
})

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
