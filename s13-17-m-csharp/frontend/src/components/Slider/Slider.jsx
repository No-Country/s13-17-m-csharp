import React, { useState, useEffect } from "react";
// import prev from '../../assets/prev.svg'
import styles from "../Slider/slider.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Registrate en MediCita y agendá tu próximo turno médico desde la comodidad de tu casa ",
    },
    {
      image:
        "https://images.pexels.com/photos/6749742/pexels-photo-6749742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Contamos con un espacio amplio, luminoso y confortable, con modernos equipamientos y tecnología, que posibilitan que la atención del paciente sea cómoda y adecuada.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661723555220-c7580a83f490?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Profesionales altamente capacitados para que puedas confiar, te brindarán la seguridad y la tranquilidad que estas buscando.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Enfocamos toda nuestra dedicación a brindarte lo mejor de nosotros como profesionales de salud priorizando la persona y la prevención. ", 
    },
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
    const interval = setInterval(goToNextSlide, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-[81.69rem] mt-[80px] md:mt-14 mx-auto">
      <div className="overflow-hidden mt-[80px] w-full h-96">
        <div className="flex transition-transform duration-500 ease-in-out transform">
          {slides.map((slide, index) => (
            <>
              <img
                key={index}
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={`w-full  object-cover object-center ${
                  styles.imagen
                }  ${index === currentIndex ? "block" : "hidden"}`}
              />

              {index === currentIndex && (
                <div
                  className={`${styles.contenedorP} absolute ml-2 top-0 left-0 p-4 mt-2 bg-gray-200 bg-opacity-70 z-10`}
                >
                  <p className={`${styles.parrafo}  text-gray-800`}>
                    {slide.text}
                  </p>
                </div>
              )}

              <div className={styles.bgBlack}></div>
            </>
          ))}
        </div>
        <img
          // src={prev}
          className="absolute cursor-pointer w-9 top-1/2 left-4 transform -translate-y-1/2   bg-opacity-50 p-2 rounded-full text-white focus:outline-none"
          onClick={goToPrevSlide}
        ></img>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2  bg-opacity-50 p-2 rounded-full text-white focus:outline-none"
          onClick={goToNextSlide}
        ></button>
      </div>
      <div className={`${styles.botones} flex items-center justify-center gap-2  `}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex
                ? "bg-[#097DCA] h-[22px] w-[22px]  "
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
