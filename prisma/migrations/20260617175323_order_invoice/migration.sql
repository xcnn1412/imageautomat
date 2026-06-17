-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "invoiceAddress" TEXT,
ADD COLUMN     "invoiceBranch" TEXT,
ADD COLUMN     "invoiceName" TEXT,
ADD COLUMN     "invoiceTaxId" TEXT,
ADD COLUMN     "invoiceType" TEXT;
