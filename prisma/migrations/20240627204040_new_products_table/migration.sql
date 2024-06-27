-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "product_Thumbnail" TEXT NOT NULL,
    "product_Title" TEXT NOT NULL,
    "product_Description" TEXT NOT NULL,
    "product_Cost" INTEGER NOT NULL,
    "on_Offer" BOOLEAN NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_Thumbnail_key" ON "Product"("product_Thumbnail");
