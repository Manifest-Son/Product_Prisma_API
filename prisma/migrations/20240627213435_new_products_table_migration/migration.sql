-- CreateTable
CREATE TABLE "PRODUCTS" (
    "id" SERIAL NOT NULL,
    "product_Thumbnail" TEXT NOT NULL,
    "product_Title" TEXT NOT NULL,
    "product_Description" TEXT NOT NULL,
    "product_Cost" DECIMAL(65,30) NOT NULL,
    "on_Offer" BOOLEAN NOT NULL,

    CONSTRAINT "PRODUCTS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PRODUCTS_product_Thumbnail_key" ON "PRODUCTS"("product_Thumbnail");
