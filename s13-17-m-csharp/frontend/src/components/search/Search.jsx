import styles from './search.module.css';
import arrow from '../../assets/arrow.svg';
import agenda from '../../assets/agenda.svg';
import lupa from '../../assets/lupa.svg';

import { categoriasTurnosMedicos } from '../../utils/Categorias';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconSearch from './IconSearch';

const Search = () => {
  const [slide, setSlide] = useState(false);
  const [searchText, setSearchText] = useState('');

  const [previewLimit, setPreviewLimit] = useState(7); // limitar opciones
  const [preview, setPreview] = useState(false); // falso, no se muestra la preview

  const filteredItems = categoriasTurnosMedicos.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const slideup = () => {
    setSlide(!slide);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setPreview(true);

    setSearchText(value);
  };

  const handleBlur = (e) => {
    if (
      !e.relatedTarget ||
      !e.relatedTarget.classList.contains('preview-button') // hace funcionar el boton de ver todas las especialdades
    ) {
      setTimeout(() => {
        setPreview(false);
      }, 100);
    }
  };

  return (
    <div>
      <div className={styles.contenedor}>
        <h2 className={`${styles.title} mt-5`}>Agenda tu turno</h2>
        <div
          className={`${styles.contenedorSearch} flex items-center mt-5 justify-between md:hidden`}
          onClick={slideup}>
          {!slide ? (
            <>
              <h3 className={styles.titleSearch}>
                Busca por especialidad
              </h3>
              <img className={styles.img} src={arrow} alt="" />
            </>
          ) : (
            <div>
              <h2 className="block w-full mb-2 text-[#646161]">
                Especialidad
              </h2>
              <h2 className="block w-full mt-2 text-[#646161]">
                Ejemplo Neurologia
              </h2>
            </div>
          )}
        </div>

        {/*Desktop */}
        <div className="bg-[#EEEEEE] hidden md:grid gap-2 rounded-3xl pb-9 pt-12 mt-3 grid-cols-2">
          <img className="mx-auto" src={agenda} alt="" />
          <div>
            <h3 className={styles.titleSecondary}>
              Encuentra tu especialista y agenda una cita
            </h3>

            <div className="relative mt-5">
              <input
                className={`${styles.input} relative`}
                type="text"
                placeholder="Buscar especialidades..."
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
              />

              {preview ? (
                <div className={`${styles.bgContainerItems}  `}>
                  {filteredItems
                    .slice(0, previewLimit)
                    .map((item) => (
                      <>
                        <NavLink
                          to={'/search-doctors'}
                          onClick={(e) => e.stopPropagation()}>
                          <div
                            className={`${styles.contenedorItems} hover:bg-slate-200 cursor-pointer p-2  grid grid-cols-[auto,1fr,auto] gap-4 items-center w-f mb-4 `}
                            key={item.id}
                            onMouseEnter={blur}>
                            <IconSearch />
                            <h3 className="text-base cursor-pointer ">
                              {item.name}
                            </h3>
                            <span className="text-sm  text-gray-500">
                              Especialidad
                            </span>
                          </div>
                        </NavLink>
                      </>
                    ))}

                  {filteredItems.length > 0 && (
                    <button
                      className="text-blue-600 text-center hover:bg-slate-200 w-full p-2 block hover:text-blue-800 cursor-pointer mt-2 preview-button"
                      onClick={() =>
                        setPreviewLimit(previewLimit + 99)
                      }>
                      Todas las especialidades
                    </button>
                  )}
                </div>
              ) : null}

              <img className={styles.lupa} src={lupa} alt="" />
            </div>
          </div>
        </div>

        {/* */}

        {slide ? (
          <div className={styles.sugerencias}>
            <h2 className={styles.titleSugerencia}>Sugerencias</h2>
            {categoriasTurnosMedicos.map((category) => (
              <NavLink to="/search-doctors" key={category.id}>
                <div>
                  <h3
                    className={`${styles.category} mb-4 text-blue-600 hover:text-blue-800 cursor-pointer`}>
                    {category.name}
                  </h3>
                </div>
              </NavLink>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
