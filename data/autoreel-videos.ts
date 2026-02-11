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
    id: "autoreel-1",
    title: "AutoReel ตัวอย่างที่ 1",
    description: "วิดีโอ REEL อัตโนมัติ พร้อมปริ้นภาพ",
    src: "/slideshow/videos/autoreel-1.mp4",
  },
  {
    id: "autoreel-2",
    title: "AutoReel ตัวอย่างที่ 2",
    description: "สร้างวิดีโอ REEL อัตโนมัติ พร้อมโพสต์ลงทุก Platform",
    src: "/slideshow/videos/autoreel-2.mp4",
  },
  {
    id: "autoreel-3",
    title: "AutoReel ตัวอย่างที่ 3",
    description: "ตู้ถ่าย REEL อัตโนมัติ พร้อมปริ้นภาพคุณภาพสูง",
    src: "/slideshow/videos/autoreel-3.mp4",
  },
]
