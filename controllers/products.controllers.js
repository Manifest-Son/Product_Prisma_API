
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export  const displayallProducts = async (req, res) => {
    try{
        const allProducts = await prisma.pRODUCTS.findMany();
        res.status(201).json(allProducts)
    } catch (e){
        res.status(500).json({success: false, message: "An error occured. Please try again."})
    }
}

export const displayaProduct = async (req, res) => {
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
            res.status(404).json({success: true, message: "product not found"})
        } else {
            res.status(500).json({success: false, message: e.message})
        }
        res.status(201).json(findProduct)
    } catch (e){
        res.status(500).json({success: false, message: e.message})
    }
}

export const createProduct = async (req, res) => {
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
                id: true,
                productThumbnail: true,
                productTitle: true,
                productCost: true
              }
        })
        res.status(201).json(newProduct)
    } catch (e){
        res.status(500).json({success: true, message: "An error has occured."})
    }
}


export const updateProducts = async (req, res) => {
    const {productThumbnail, productTitle, productDescription, productCost, onOffer} = req.body
    const id = req.params.id;

    let updateProduct;
    if(productThumbnail){
        updateProduct = await prisma.pRODUCTS.update({
            where: { id: id},
            data: {productThumbnail: productThumbnail}
        })
    }
    if(productTitle){
        updateProduct = await prisma.pRODUCTS.update({
            where: { id: id},
            data: {productTitle: productTitle}
        })
    }
    if(productDescription){
        updateProduct = await prisma.pRODUCTS.update({
            where: { id: id},
            data: {productDescription: productDescription}
        })
    }
    if(productCost){
        updateProduct = await prisma.pRODUCTS.update({
            where: { id: id},
            data: {productCost: productCost}
        })
    }
    if(onOffer){
        updateProduct = await prisma.pRODUCTS.update({
            where: { id: id},
            data: {onOffer: onOffer}
        })
    }
}

export const deleteProducts = async (req, res) => {
    const id = req.params.id;
    try{
        const deleteProduct = await prisma.pRODUCTS.delete({
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
        if (!deleteProduct){
            res.status(404).json("We are sorry, we cannot find the record")
        } else {
            res.status(500).json({message: "An error occured. Try again."})
        }
        res.status(200).json(deleteProduct)
    } catch (e){
        res.status(500).json({message: "An error occured. Try again."})
    }
}