import { Router } from "express";
import {config} from 'dotenv'
import { vaildateProducts } from "../middleware/products.middleware.js";
import { displayaProduct, displayallProducts, createProduct, updateProducts, deleteProducts } from "../controllers/products.controllers.js";
import { PrismaClient } from "@prisma/client"

config()
const router = Router();
const prisma = new PrismaClient();



router.get("/", displayallProducts)


router.get("/:id", displayaProduct)

router.post("/", createProduct)


router.patch("/:id", updateProducts, vaildateProducts)


router.delete("/:id", deleteProducts)


export default router;