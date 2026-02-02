"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Luxury wedding photobooth experience at five-star venue",
    category: "Wedding",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Premium corporate event photobooth setup",
    category: "Corporate",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Brand activation photobooth for product launch",
    category: "Brand",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Elegant private celebration photobooth",
    category: "Private",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Traditional Thai wedding photobooth ceremony",
    category: "Wedding",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Exclusive gala event photobooth experience",
    category: "Gala",
  },
];

const categories = ["All", "Wedding", "Corporate", "Brand", "Private", "Gala"];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="py-32 md:py-40 bg-[#FAFAFA]"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-[#219EBC] mb-6">
            Portfolio
          </p>
          <h2
            id="gallery-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#023047] mb-6"
          >
            Moments We Captured
          </h2>
          <p className="text-lg text-[#023047]/60 max-w-xl mx-auto leading-relaxed">
            A glimpse into the unforgettable experiences we have created
          </p>
        </div>

        {/* Filter */}
        <nav
          className="flex justify-center gap-2 md:gap-4 mb-16 flex-wrap"
          aria-label="Gallery filter"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 text-sm tracking-wider transition-all duration-500 ${
                activeFilter === category
                  ? "bg-[#023047] text-white"
                  : "bg-white text-[#023047]/60 hover:text-[#023047]"
              }`}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
        >
          {filteredItems.map((item, index) => (
            <article
              key={item.src}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              role="listitem"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                className={`object-cover transition-all duration-700 ease-out ${
                  hoveredIndex === index ? "scale-105" : "scale-100"
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Subtle Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#023047]/80 via-transparent to-transparent transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Category Label */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-2">
                  {item.category}
                </p>
                <p className="text-white font-serif text-xl leading-tight">
                  {item.alt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-[#023047] hover:text-[#FB8500] transition-colors duration-300 group"
          >
            <span className="text-sm tracking-[0.2em] uppercase">
              Request Full Portfolio
            </span>
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </a>
        </div>
      </div>
    </section>
  );
}
