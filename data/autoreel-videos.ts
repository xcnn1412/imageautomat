// AutoReel Video Data
export interface AutoReelVideo {
  id: string
  title: string
  description: string
  src: string
}

// AutoReel videos from public/slideshow/videos directory
export const AUTOREEL_VIDEOS: AutoReelVideo[] = [
  {
    id: "signage-1",
    title: "ตู้ถ่ายรูป Signature PHOTOBOOTH สร้าง REEL อัตโนมัติ",
    description: "ตู้ถ่ายรูปพร้อมระบบสร้างวิดีโอ REEL ลายเซ็นต์อัตโนมัติ โพสต์ลงทุก Platform ได้ทันที",
    src: "/slideshow/signage/signage-1.mp4",
  },
  {
    id: "signage-2",
    title: "ระบบ REEL อัตโนมัติ สำหรับงานอีเวนต์",
    description: "ซอฟต์แวร์ตู้ถ่ายรูปสร้างวิดีโอ REEL คุณภาพสูง เหมาะสำหรับงานอีเวนต์และงานเปิดตัวสินค้า",
    src: "/slideshow/signage/signage-2.mp4",
  },
  {
    id: "signage-3",
    title: "ตู้ REEL ลายเซ็นต์ พร้อมถ่ายภาพและวิดีโอ",
    description: "ตู้ Photobooth ลายเซ็นต์สุดพรีเมียม ถ่ายภาพและสร้างวิดีโอ REEL พร้อมปริ้นภาพในงานเดียว",
    src: "/slideshow/signage/signage-5.mp4",
  },
  {
    id: "signage-4",
    title: "Photobooth สร้างวิดีโอ REEL โพสต์ได้ทุก Platform",
    description: "ระบบสร้างวิดีโอ REEL อัตโนมัติ จากตู้ถ่ายรูป Photobooth พร้อมแชร์ลง Instagram TikTok Facebook ได้ทันที",
    src: "/slideshow/signage/signage-4.mp4",
  },
  {
    id: "signage-5",
    title: "ตู้ถ่ายรูป REEL ลายเซ็นต์ ครบจบในตู้เดียว",
    description: "ตู้ถ่ายรูปอัตโนมัติพร้อมสร้าง REEL ลายเซ็นต์ ถ่ายภาพ ถ่ายวิดีโอ และปริ้นภาพคุณภาพสูง ครบในเครื่องเดียว",
    src: "/slideshow/signage/signage-6.mp4",
  },
]
