import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import productRoutes from "./routes/productRoutes.js"

connectDB() // Connects to MongoDB

const port = process.env.PORT
const app = express()

app.get("/", (req, res) => {
  res.send("API is running...")
})

app.use("/api/v2/products", productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
