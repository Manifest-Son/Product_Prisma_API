import express from "express";
import productRouter from './routes/products.router.js'

const app = express();

app.use("/product", productRouter)

app.listen(3000, (req, res) => {
    console.log("Server running on localhost:3000....")
})