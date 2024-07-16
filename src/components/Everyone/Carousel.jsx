import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Corousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500 relative"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
        {/* <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-50"
          >
            <FaChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FaChevronRight size={40} />
          </button>
        </div> */}
      </div>
      <div className="z-50 drop-shadow-2xl my-2" >
          <div className="flex items-center justify-center gap-4">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
              transition-all w-3 h-3 bg-black rounded-full
              ${curr === i ? "" : "bg-opacity-50"}
            `}
              />
            ))}
          </div>
      </div>
    </>
  );
}

export default Corousel;

function xyz() {
  return (
    <div
      id="default-carousel"
      className="relative w-full container"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative bg-black h-56 overflow-hidden rounded-lg md:h-96 ">
        {/* <!-- Item 1 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={b1}
            className="absolute z-40 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 2 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={b2}
            className="absolute z-40 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* <!-- Item 3 --> */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={b3}
            className="absolute z-40 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-blue-600"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-blue-600"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-blue-600"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
