import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
function SlideShow({ slides, autoSlide = false, slideDuration = 3000 }) {
  const [current, setCurrent] = React.useState(0);
  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  React.useEffect(() => {
    if (!autoSlide) return
        const slideInterval = setInterval(next, slideDuration)
        return () => clearInterval(slideInterval)
  }, []);
  return (
    <div className="h-full relative w-full">
      <div className="flex overflow-x-hidden transition-all duration-300 ease-out w-full h-full">
        {slides.map((imageObj) => (
          <img
            style={{ transform: `translateX(-${current * 99.6}%)` }}
            className="object-cover bg-no-repeat w-full h-full"
            key={imageObj.id}
            src={imageObj.src}
            alt={"img" + imageObj.id}
          />
        ))}
      </div>
      <div className=" absolute top-0 h-full w-full  flex justify-between px-3">
        <button onClick={prev}>
          <FaChevronLeft className="bg-black cursor-pointer " size={20} />
        </button>
        <button onClick={next}>
          <FaChevronRight className="bg-black" size={20} />
        </button>
      </div>
      <div className="absolute flex bottom-12  gap-x-3 right-[45%]">
        {slides.map((image) => (
          <div
            key={image.id}
            onClick={() => setCurrent(image.id - 1)}
            className={`w-3 cursor-pointer h-3 rounded-full ${
              current == image.id - 1 ? "bg-white" : " bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
