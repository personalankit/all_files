import express from "express"
import { userLogin, userSignup } from "../controllers/users.js"
const route = express.Router()

route.post('/signup', userSignup)
route.post('/login', userLogin)

export default route