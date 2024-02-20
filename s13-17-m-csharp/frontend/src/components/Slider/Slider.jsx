import React, { useState, useEffect } from "react";
import styles from "../Slider/slider.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/6749742/pexels-photo-6749742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://plus.unsplash.com/premium_photo-1661723555220-c7580a83f490?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden w-full h-96">
        <div className="flex transition-transform duration-500 ease-in-out transform">
          {slides.map((slide, index) => (
            <>
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`w-full  object-cover object-center ${
                  styles.imagen
                }  ${index === currentIndex ? "block" : "hidden"}`}
              />

              {index === 0 && (
                <div
                  className={`${styles.contenedorP} absolute  ml-2 top-0 left-0 p-4 mt-2 bg-gray-200 bg-opacity-70 z-10`}
                >
                  <p className={`${styles.parrafo}  text-gray-800`}>
                    Registrate en MediCita y agendá tu próximo turno médico
                    desde la comodidad de tu casa
                  </p>
                </div>
              )}

              <div className={styles.bgBlack}></div>
            </>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2   bg-opacity-50 p-2 rounded-full text-white focus:outline-none"
          onClick={goToPrevSlide}
        ></button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2  bg-opacity-50 p-2 rounded-full text-white focus:outline-none"
          onClick={goToNextSlide}
        ></button>
      </div>
      <div className="flex items-center justify-center gap-6 -mt-14">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex
                ? "bg-[#097DCA] h-[28px] w-[28px]  "
                : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
