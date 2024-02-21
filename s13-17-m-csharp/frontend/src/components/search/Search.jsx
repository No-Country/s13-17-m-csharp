import styles from "./search.module.css";
import arrow from "../../assets/arrow.svg";
import agenda from "../../assets/agenda.svg";
import lupa from "../../assets/lupa.svg";
import { categoriasTurnosMedicos } from "../../utils/Categorias";
import { useState } from "react";

const Search = () => {
  const [slide, setSlide] = useState(false);

  const slideup = () => {
    setSlide(!slide);
  };

  return (
    <div>
      <div className={styles.contenedor} >
        <h2 className={`${styles.title} mt-5`}>Agenda tu turno</h2>
        <div
          className={`${styles.contenedorSearch} flex items-center mt-5 justify-between md:hidden`}
          onClick={slideup}
        >
          {!slide ? (
            <>
              <h3 className={styles.titleSearch}>Busca por especialidad</h3>
              <img className={styles.img} src={arrow} alt="" />
            </>
          ) : (
            <div>
              <h2 className="block w-full mb-2 text-[#646161]">Especialidad</h2>
              <h2 className="block w-full mt-2 text-[#646161]">
                Ejemplo Neurologia
              </h2>
            </div>
          )}
        </div>

        {/*Deskop */}
        <div className=" bg-[#EEEEEE] hidden md:grid gap-2  rounded-3xl  pb-9 pt-12 mt-3 grid-cols-2">
          <img className=" mx-auto " src={agenda} alt="" />
          <div>
            <h2 className={styles.titleSecondary}>Encuentra tu especialista y agenda una cita</h2>

            <div className="relative mt-5">
              <input
                className={`${styles.input} relative`}
                type="text"
                placeholder="Buscar especialidades..."
              />
              <img className={styles.lupa} src={lupa} alt="" />
            </div>
          </div>
        </div>

        {/* */}

        {slide ? (
          <div className={styles.sugerencias}>
            <h2 className={styles.titleSugerencia}>Sugerencias</h2>
            {categoriasTurnosMedicos.map((category) => (
              <>
                <div key={category.id}>
                  <h3 className={`${styles.category} mb-4`}>{category.name}</h3>
                </div>
              </>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
