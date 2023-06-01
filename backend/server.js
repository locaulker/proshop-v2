import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import connectDB from './config/db.js'

import products from './data/products.js'

connectDB() // Connects to MongoDB

const port = process.env.PORT
const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/v2/products', (req, res) => {
  res.json(products)
})

app.get('/api/v2/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

app.listen(port, () => console.log(`Server running on port ${port}`))
