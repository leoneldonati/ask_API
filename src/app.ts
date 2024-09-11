import express from 'express'

export const app = express()

// cabecera de express
app.disable('x-powered-by')

// parsear respuestas json
app.use(express.json())

// rutas
