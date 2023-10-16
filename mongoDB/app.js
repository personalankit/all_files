import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import { mongoDB } from "./db.js"
const app = express()
mongoDB()
const port = process.env.PORT || 5000;

import booksRoutes from "./routes/booksRoutes.js"
import userRoutes from "./routes/userRoutes.js"

app.use(bodyParser.json({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Routes and endpoints
app.use('/books', booksRoutes)
app.use('/users', userRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})