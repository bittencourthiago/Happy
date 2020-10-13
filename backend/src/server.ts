import express from 'express'
import path from 'path'
import 'express-async-errors'

import cors from 'cors'

import './database/migrations/connection'
import routes from './routes'

import errorHandler from './errors/handler'

const port = 3333 

const app = express()

app.use(cors())
app.use(express.json())//para usar json no body
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`On in ${port}`)
})