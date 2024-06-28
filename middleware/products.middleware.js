export const vaildateProducts = (req, res, next) => {
    if(!productThumbnail) return res.status(400).json({success: false, message: "Product Thumbnail is required"})
        if(!productTitle) return res.status(400).json({success: false, message: "Product Title is required"})
        if(!productDescription) return res.status(400).json({success: false, message: "Product Description is required"})
        if(!productCost) return res.status(400).json({success: false, message: "Product Cost is required"})
        if(!onOffer) return res.status(400).json({success: false, message: "Offers is required"})
        res.send(newProduct);

        if(newProduct.rowCount === 1 ){
            res.status(201).json({success: true, message: "Product created succesfully"})
        } 
        next()
}
