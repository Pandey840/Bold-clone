import React, { useState, useEffect } from "react";

const SlideShow = ({ imageLinks, text1, text2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % imageLinks.carouselImages.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, imageLinks.carouselImages]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {imageLinks.carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-white max-w-lg mx-40 my-48">
            <h1 className="text-5xl font-extrabold">{text1}</h1>
            <p className="text-5xl">{text2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
