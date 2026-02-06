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
    src: "/slideshow/videos/file_photobooth_preview.mp4",
    title: "First Moment",
    description: "ช่วงเวลาพิเศษที่บันทึกไว้",
    category: "wedding",
  },
  {
    id: 2,
    src: "/slideshow/videos/file_photobooth_preview_1.mp4",
    title: "Sweet Memory",
    description: "ความทรงจำที่สวยงาม",
    category: "wedding",
  },
  {
    id: 3,
    src: "/slideshow/videos/file_photobooth_preview_2.mp4",
    title: "Joyful Smile",
    description: "รอยยิ้มที่เปล่งประกาย",
    category: "wedding",
  },
  {
    id: 4,
    src: "/slideshow/videos/file_photobooth_preview_3.mp4",
    title: "Celebration",
    description: "ชีวิตคือการเฉลิมฉลอง",
    category: "wedding",
  },
  {
    id: 5,
    src: "/slideshow/videos/file_photobooth_preview_4.mp4",
    title: "Through the Lens",
    description: "เรื่องราวผ่านเลนส์",
    category: "wedding",
  },
  {
    id: 6,
    src: "/slideshow/videos/file_photobooth_preview)_5.mp4",
    title: "Happiness",
    description: "ความสุขที่จับต้องได้",
    category: "wedding",
  },
]
