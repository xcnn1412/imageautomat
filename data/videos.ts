export interface VideoSlide {
  id: number
  src: string
  title: string
  description: string
  category: string
}

export const ALL_VIDEOS: VideoSlide[] = [
  {
    id: 1,
    src: "/slideshow/videos/file_photobooth_preview_3.mp4",
    title: "The Unseen Beginning",
    description: "เบื้องหลังทุกภาพนิ่ง คือความจริงที่เคลื่อนไหว",
    category: "Newspaper",
  },
  {
    id: 2,
    src: "/slideshow/videos/file_photobooth_preview_1.mp4",
    title: "Candid Essence",
    description: "บันทึกอารมณ์ก่อนเริ่มโพสต์ ทรงพลังกว่าที่เคย",
    category: "Newspaper",
  },
  {
    id: 3,
    src: "/slideshow/videos/file_photobooth_preview_2.mp4",
    title: "Pure Connection",
    description: "จังหวะที่หัวใจเชื่อมกัน ก่อนสัญญาณชัตเตอร์จะดัง",
    category: "Newspaper",
  },
  {
    id: 4,
    src: "/slideshow/videos/file_photobooth_preview.mp4",
    title: "Live Every Moment",
    description: "เปลี่ยนรูปถ่ายธรรมดา ให้กลับมามีชีวิตอีกครั้ง",
    category: "Newspaper",
  },
  {
    id: 5,
    src: "/slideshow/videos/file_photobooth_preview_4.mp4",
    title: "Beyond the Frame",
    description: "มากกว่าแค่การโพสต์ท่า คือที่มาของรอยยิ้ม",
    category: "Newspaper",
  },
  {
    id: 6,
    src: "/slideshow/videos/file_photobooth_preview)_5.mp4",
    title: "Living Memories",
    description: "เทคโนโลยี Pre-capture เพื่อที่สุดของความทรงจำ",
    category: "Newspaper",
  },
  {
    id: 7,
    src: "/slideshow/videos/file_photobooth_preview_6.mp4",
    title: "Living Memories",
    description: "ด้วยความรัก และความหวังดี",
    category: "Newspaper",
  },
  // Event Category
  {
    id: 8,
    src: "/slideshow/videos/frame_event_1.mp4",
    title: "Event Spotlight",
    description: "ไฮไลท์สุดพิเศษจากงานอีเว้นท์",
    category: "Event",
  },
  {
    id: 9,
    src: "/slideshow/videos/frame_event_2.mp4",
    title: "Corporate Gathering",
    description: "บรรยากาศงานสัมมนาและกิจกรรมองค์กร",
    category: "Event",
  },
  {
    id: 10,
    src: "/slideshow/videos/frame_event_3.mp4",
    title: "Brand Activation",
    description: "กิจกรรมแบรนด์ที่น่าจดจำ",
    category: "Event",
  },
  {
    id: 11,
    src: "/slideshow/videos/frame_event_4.mp4",
    title: "Team Building",
    description: "ช่วงเวลาสร้างความสัมพันธ์ในองค์กร",
    category: "Event",
  },
  {
    id: 12,
    src: "/slideshow/videos/frame_event_5.mp4",
    title: "Product Launch",
    description: "งานเปิดตัวผลิตภัณฑ์ที่โดดเด่น",
    category: "Event",
  },
  {
    id: 13,
    src: "/slideshow/videos/frame_event_6.mp4",
    title: "Festival Vibes",
    description: "บรรยากาศเทศกาลและงานรื่นเริง",
    category: "Event",
  },
   {
    id: 14,
    src: "/slideshow/videos/frame_event_10.mp4",
    title: "Team Building",
    description: "ช่วงเวลาสร้างความสัมพันธ์ในองค์กร",
    category: "Wedding",
  },
  {
    id: 15,
    src: "/slideshow/videos/frame_event_11.mp4",
    title: "Product Launch",
    description: "งานเปิดตัวผลิตภัณฑ์ที่โดดเด่น",
    category: "Wedding",
  },
  {
    id: 16,
    src: "/slideshow/videos/frame_event_12.mp4",
    title: "Festival Vibes",
    description: "บรรยากาศเทศกาลและงานรื่นเริง",
    category: "Wedding",
  },
  {
    id: 17,
    src: "/slideshow/videos/frame_event_13.mp4",
    title: "Team Building",
    description: "ช่วงเวลาสร้างความสัมพันธ์ในองค์กร",
    category: "School",
  },
  {
    id: 18,
    src: "/slideshow/videos/frame_event_14.mp4",
    title: "Product Launch",
    description: "งานเปิดตัวผลิตภัณฑ์ที่โดดเด่น",
    category: "School",
  },
  {
    id: 19,
    src: "/slideshow/videos/frame_event_15.mp4",
    title: "Festival Vibes",
    description: "บรรยากาศเทศกาลและงานรื่นเริง",
    category: "School",
  },
]

// Helper function to get unique categories
export function getUniqueCategories(): string[] {
  const categories = ALL_VIDEOS.map(video => video.category)
  return Array.from(new Set(categories))
}

// Default category labels (can be customized)
export const CATEGORY_LABEL_MAP: Record<string, string> = {
  "Newspaper": "หนังสือพิมพ์",
  "Event": "งานอีเว้นท์",
  "wedding": "งานแต่ง",
  "party": "งานเลี้ยง",
  "portrait": "บุคคล",
}

