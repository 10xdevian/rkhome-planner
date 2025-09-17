"use client"
import React, { useState, useEffect } from "react"
import { data } from "../../data/data.js"
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"

const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  function handlePrevious() {
    setCurrentIndex((prev) =>
      prev === 0 ? data.length - 1 : prev - 1
    )
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % data.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000) // autoplay
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gray-800">
      {/* Images container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`slide-${index}`}
            className="
              w-full 
              h-[300px]       /* mobile */
              sm:h-[400px]    /* small tablets */
              md:h-[500px]    /* tablets */
              lg:h-[650px]    /* large tablets/small laptops */
              xl:h-[850px]    /* desktops (keep original) */
              flex-shrink-0
              object-cover
            "
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl bg-black/40 p-2 rounded-full"
        onClick={handlePrevious}
      >
        <SlArrowLeft />
      </button>
      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl bg-black/40 p-2 rounded-full"
        onClick={handleNext}
      >
        <SlArrowRight />
      </button>
    </div>
  )
}

export default Imageslider
