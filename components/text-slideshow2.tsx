"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const services = ["ภาพนิ่งคมชัด", "ภาพเคลื่อนไหว 25fps", "เทคโนโลยีทันสมัย", "ราคาสุดคุ้ม"];

export function TextSlideshow2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check if desktop on mount and resize
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    // Only run animation on desktop
    if (!isDesktop || isComplete) return;

    const timer = setTimeout(() => {
      if (currentIndex < services.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [currentIndex, isComplete, isDesktop]);

  const handleReplay = () => {
    setCurrentIndex(0);
    setIsComplete(false);
  };

  return (
    <div className="w-full bg-[#FB8500] flex flex-col items-center justify-center py-10 md:py-16 lg:py-20 px-4 md:px-8 overflow-hidden">
      {/* Container with max-width for better readability */}
      <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl w-full mx-auto">
        {/* Header Text */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-8 sm:mb-10 md:mb-12 lg:mb-16 tracking-wide leading-relaxed text-center"
        >
          จำหน่ายซอฟต์แวร์ Photobooth
        </motion.h1>

        {/* Service Items */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-3 lg:gap-5 xl:gap-8">
          {services.map((service, index) => (
            <div key={service} className="flex items-center gap-1.5 sm:gap-3 md:gap-5 lg:gap-8">
              {/* Service Item */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={
                  !isDesktop || index <= currentIndex
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.8, y: 20 }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative"
              >
                <motion.span
                  className="text-white text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold whitespace-nowrap"
                  animate={
                    isDesktop && index === currentIndex && !isComplete
                      ? { scale: [1, 1.05, 1] }
                      : { scale: 1 }
                  }
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {service}
                </motion.span>

                {/* Underline animation */}
                <motion.div
                  className="absolute -bottom-0.5 sm:-bottom-1 md:-bottom-2 left-0 h-0.5 bg-white/40 rounded-full"
                  initial={{ width: 0 }}
                  animate={
                    !isDesktop || index <= currentIndex
                      ? { width: "100%" }
                      : { width: 0 }
                  }
                  transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                />
              </motion.div>

              {/* Chevron separator - only show on md and up */}
              {index < services.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    !isDesktop || index < currentIndex
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-white/60 hidden md:block"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-7 lg:h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Completion animation - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 hidden md:block"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isComplete ? { width: 120 } : { width: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="h-1 bg-white/30 rounded-full mx-auto"
          />
        </motion.div>

        {/* Replay button - hidden on mobile */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          onClick={handleReplay}
          className="mt-8 px-6 py-3 text-white/80 text-sm font-medium border border-white/30 rounded-full hover:bg-white/10 transition-colors duration-300 mx-auto hidden md:block"
        >
          เล่นซ้ำ
        </motion.button>
      </div>
    </div>
  );
}
