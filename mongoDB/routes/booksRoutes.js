import express from "express"
import { getBooks, getBooksBySearch, postBooks } from "../controllers/books.js"
const route = express.Router()

route.get('/', getBooks )
route.post('/', postBooks)
route.get('/search', getBooksBySearch)

export default route