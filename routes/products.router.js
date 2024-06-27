import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("Display all products")
})

router.get("/:id", (req, res) => {
    res.send("Display a products")
})

router.post("/", (req, res) => {
    res.send("Create a products")
})

router.patch("/:id", (req, res) => {
    res.send("Modify products")
})

router.delete("/:id", (req, res) => {
    res.send("Delete products")
})

router.get("/", (req, res) => {
    res.send("Display all products")
})

export default router;