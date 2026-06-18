-- AlterTable
ALTER TABLE "CartItem" ADD COLUMN     "priceMode" TEXT NOT NULL DEFAULT 'full';

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "priceMode" TEXT NOT NULL DEFAULT 'full';

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "depositTHB" INTEGER,
ADD COLUMN     "features" TEXT[],
ADD COLUMN     "longDescription" TEXT,
ADD COLUMN     "specs" JSONB;
