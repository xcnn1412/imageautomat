// Software Output Showcase Data
export interface ShowcaseItem {
  id: string
  type: "video"
  src: string
  title: string
  description: string
  badge?: string
}

// รวมวิดีโอตัวอย่างจากซอฟต์แวร์ทั้งหมด
export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  // เอฟเฟกต์หนังสือพิมพ์ (Newspaper Effect)
  {
    id: "news-1",
    type: "video",
    src: "/slideshow/videos/file_photobooth_preview_3.mp4",
    title: "หนังสือพิมพ์เคลื่อนไหว",
    description: "เปลี่ยนภาพนิ่งให้กลายเป็นวิดีโอได้ด้วย AI",
    badge: "AI Powered"
  },
  {
    id: "news-2",
    type: "video",
    src: "/slideshow/videos/file_photobooth_preview_1.mp4",
    title: "จับทุกช่วงเวลา",
    description: "บันทึกอารมณ์ก่อนกดชัตเตอร์ได้ทันที",
    badge: "AI Powered"
  },
  {
    id: "news-3",
    type: "video",
    src: "/slideshow/videos/file_photobooth_preview_2.mp4",
    title: "เชื่อมต่อทุกความรู้สึก",
    description: "จังหวะที่หัวใจเชื่อมกัน ในทุกช่วงเวลา",
    badge: "AI Powered"
  },
  {
    id: "news-4",
    type: "video",
    src: "/slideshow/videos/file_photobooth_preview.mp4",
    title: "ภาพมีชีวิต",
    description: "เปลี่ยนภาพถ่ายธรรมดาให้มีชีวิตอีกครั้ง",
    badge: "AI Powered"
  },
  {
    id: "news-5",
    type: "video",
    src: "/slideshow/videos/file_photobooth_preview_4.mp4",
    title: "เกินกว่าเฟรม",
    description: "มากกว่าการโพสต์ท่า จับรอยยิ้มที่แท้จริง",
    badge: "AI Powered"
  },
  {
    id: "news-6",
    type: "video",
    src: "/slideshow/videos/file_photobooth_preview)_5.mp4",
    title: "ความทรงจำมีชีวิต",
    description: "เทคโนโลยี Pre-capture บันทึกทุกช่วงเวลาสำคัญ",
    badge: "AI Powered"
  },
  {
    id: "news-7",
    type: "video",
    src: "/slideshow/videos/file_photobooth_preview_6.mp4",
    title: "ความทรงจำที่คงอยู่",
    description: "ด้วยความรัก และความหวังดี",
    badge: "AI Powered"
  },
  
  // งานอีเว้นท์ (Event Frames)
  {
    id: "event-1",
    type: "video",
    src: "/slideshow/videos/frame_event_1.mp4",
    title: "เฟรมงานอีเว้นท์",
    description: "ปรับแต่งเฟรมได้ตามธีมงาน",
  },
  {
    id: "event-2",
    type: "video",
    src: "/slideshow/videos/frame_event_2.mp4",
    title: "งานองค์กร",
    description: "เฟรมสำหรับงานสัมมนาและกิจกรรมบริษัท",
  },
  {
    id: "event-3",
    type: "video",
    src: "/slideshow/videos/frame_event_3.mp4",
    title: "แบรนด์แอกทิเวชั่น",
    description: "ออกแบบแบรนด์ให้โดดเด่นในงาน",
  },
  {
    id: "event-4",
    type: "video",
    src: "/slideshow/videos/frame_event_4.mp4",
    title: "ทีมบิลดิ้ง",
    description: "เฟรมสร้างความสัมพันธ์ในองค์กร",
  },
  {
    id: "event-5",
    type: "video",
    src: "/slideshow/videos/frame_event_5.mp4",
    title: "เปิดตัวสินค้า",
    description: "เฟรมงานเปิดตัวที่โดดเด่น",
  },
  {
    id: "event-6",
    type: "video",
    src: "/slideshow/videos/frame_event_6.mp4",
    title: "งานเทศกาล",
    description: "บรรยากาศเทศกาลและงานรื่นเริง",
  },
  {
    id: "event-7",
    type: "video",
    src: "/slideshow/videos/frame_event_10.mp4",
    title: "งานแต่งงาน",
    description: "เฟรมสำหรับวันสำคัญที่สุดในชีวิต",
  },
  {
    id: "event-8",
    type: "video",
    src: "/slideshow/videos/frame_event_11.mp4",
    title: "งานปาร์ตี้",
    description: "จับช่วงเวลาสนุกในงานเลี้ยง",
  },
  {
    id: "event-9",
    type: "video",
    src: "/slideshow/videos/frame_event_12.mp4",
    title: "งานสังสรรค์",
    description: "บรรยากาศงานชิลล์ๆ ที่น่าจดจำ",
  },
  {
    id: "event-10",
    type: "video",
    src: "/slideshow/videos/frame_event_13.mp4",
    title: "งานโรงเรียน",
    description: "เฟรมสำหรับงานนักเรียน นักศึกษา",
  },
  {
    id: "event-11",
    type: "video",
    src: "/slideshow/videos/frame_event_14.mp4",
    title: "งานรุ่น",
    description: "จับความทรงจำกับเพื่อนร่วมรุ่น",
  },
  {
    id: "event-12",
    type: "video",
    src: "/slideshow/videos/frame_event_15.mp4",
    title: "กิจกรรมเยาวชน",
    description: "เฟรมสำหรับกิจกรรมเด็กและเยาวชน",
  },
  
  // REEL อัตโนมัติ (Auto-Generated REELs)
  {
    id: "reel-1",
    type: "video",
    src: "/slideshow/autoreel/reel-01.mp4",
    title: "สร้าง REEL อัตโนมัติ",
    description: "ระบบสร้างวิดีโอ REEL พร้อมโพสต์ได้ทันที",
    badge: "Auto-Generated"
  },
  {
    id: "reel-2",
    type: "video",
    src: "/slideshow/autoreel/reel-02.mp4",
    title: "โพสต์ได้เลย",
    description: "แชร์ลง Instagram, TikTok, Facebook ทันที",
    badge: "Auto-Generated"
  },
  {
    id: "reel-3",
    type: "video",
    src: "/slideshow/autoreel/reel-03.mp4",
    title: "REEL ลายเซ็นต์",
    description: "วิดีโอ REEL ลายเซ็นต์เฉพาะของคุณ",
    badge: "Auto-Generated"
  },
  {
    id: "reel-4",
    type: "video",
    src: "/slideshow/autoreel/reel-04.mp4",
    title: "ระบบสร้างอัตโนมัติ",
    description: "สร้างวิดีโอคุณภาพสูงอัตโนมัติ",
    badge: "Auto-Generated"
  },
  {
    id: "reel-5",
    type: "video",
    src: "/slideshow/autoreel/reel-05.mp4",
    title: "ครบในตู้เดียว",
    description: "ถ่ายภาพ สร้าง REEL และโพสต์ได้ทันที",
    badge: "Auto-Generated"
  },
  {
    id: "reel-6",
    type: "video",
    src: "/slideshow/autoreel/reel-06.mp4",
    title: "ทุก Platform",
    description: "รองรับทุกแพลตฟอร์มโซเชียลมีเดีย",
    badge: "Auto-Generated"
  },
  {
    id: "reel-7",
    type: "video",
    src: "/slideshow/autoreel/reel-07.mp4",
    title: "คุณภาพพรีเมียม",
    description: "วิดีโอ REEL ความละเอียดสูง พร้อมลูกเล่น",
    badge: "Auto-Generated"
  },
]
