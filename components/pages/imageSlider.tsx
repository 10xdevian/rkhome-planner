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
              xl:h-[850px]    /* desktops */
              flex-shrink-0
              object-cover
            "
          />
        ))}
      </div>

      {/* Static text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-8xl sm:text-8xl text-green-700 font-bold drop-shadow-md">
          Design and manage <br/> home plans with ease
        </h2>
        <p className="mt-2 sm:mt-4 text-green-950 text-2xl sm:text-2xl max-w-2xl drop-shadow-md">
          Transform your living space with our expert design services. You can expect much more from us.
        </p>
        <button className="
    bg-gradient-to-r from-blue-600 to-indigo-600 
    text-white 
    font-semibold 
    px-6 
    py-3 
    rounded-full 
    shadow-lg 
    hover:from-indigo-600 
    hover:to-blue-600 
    hover:scale-105 
    active:scale-95 
    focus:outline-none 
    focus:ring-4 
    focus:ring-indigo-300 
    transition-all 
    duration-300
    mt-6
    cursor-pointer
    text-xl
    sm:text-2xl
  ">Contact For Your Customized Plan</button>

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
