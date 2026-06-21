-- เพิ่ม gate อนุมัติสมาชิก: approvedAt null = รอ admin อนุมัติ
ALTER TABLE "User" ADD COLUMN "approvedAt" TIMESTAMP(3);

-- grandfather: สมาชิกเดิม (ก่อนมี gate) ถือว่าอนุมัติแล้ว ไม่ให้โดนล็อก
UPDATE "User" SET "approvedAt" = "createdAt";
