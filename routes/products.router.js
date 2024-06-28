import { Router } from "express";
import {config} from 'dotenv'
import { PrismaClient } from "@prisma/client"

config()
const router = Router();
const prisma = new PrismaClient();

router.get("/", (req, res) => {
    res.send("Display all products")
})

router.get("/:id", (req, res) => {
    res.send("Display a products")
})

router.post("/", async (req, res) => {
    try{
        const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body
        const newProduct = await prisma.pRODUCTS.create({
            data :
            {
                productThumbnail: productThumbnail,
                productTitle: productTitle,
                productDescription: productDescription,
                productCost: productCost,
                onOffer: onOffer
              },
              select: {
                productThumbnail: true,
                productTitle: true,
                productCost: true
              }
        })
        res.status(201).json(newProduct)
    } catch (e){
        res.status(500).json({success: true, message: "An error has occured."})
    }
})

router.patch("/:id", (req, res) => {
    res.send("Modify products")
})

router.delete("/:id", (req, res) => {
    res.send("Delete products")
})

router.get("/:id", (req, res) => {
    res.send("Display all products")
})

export default router;