import { Router } from "express";
import {config} from 'dotenv'
import { PrismaClient } from "@prisma/client"

config()
const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
    try{
        const allProducts = await prisma.pRODUCTS.findMany();
        res.status(201).json(allProducts)
    } catch (e){
        res.status(500).json({success: false, message: "An error occured. Please try again."})
    }
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const findProduct = await prisma.pRODUCTS.findFirst({
            where: {
                id: id
            },
            select: {
                productThumbnail: true,
                productTitle: true,
                productDescription: true,
                productCost: true
            }
        })
        if(!findProduct){
            res.status(404).json({message: "product not found"})
        } else {
            res.status(500).json({success: false, message: "An error occured. Try again later."})
        }
        res.status(201).json(findProduct)
    } catch (e){
        res.status(500).json({success: false, message: "Error has occured. Please try again"})
    }
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

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try{
        const deleteProduct = await prisma.pRODUCTS.delete({
            where: {
                id: id
            }
        })
        if (!deleteProduct){
            res.status(404).json("We are sorry, we cannot fin the record")
        } else {
            res.status(500).json({message: "An error occured. Try again."})
        }
        res.status(201).json(deleteProduct)
    } catch (e){
        res.status(500).json({message: "An error occured. Try again."})
    }
    
})


export default router;