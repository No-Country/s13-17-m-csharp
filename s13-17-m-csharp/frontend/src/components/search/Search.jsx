import { useState } from 'react';
import InputSrc from './InputSearch/InputSrc';
import { categoriasTurnosMedicos } from '../../utils/Categorias';
import styles from './search.module.css';
import agenda from '../../assets/agenda.svg';

import lupa from '../../assets/lupa.svg';

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import IconSearch from './IconSearch';
import { fetchData } from '../../utils/CategoryApi';


const Search = () => {
  const [searchText, setSearchText] = useState('');

  const [previewLimit, setPreviewLimit] = useState(7); // limitar opciones
  const [preview, setPreview] = useState(false); // falso, no se muestra la preview
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await fetchData(); // Funcion de utils/categoryApi.js
        setCategoria(data);
      } catch (error) {
        
      }
    };

    obtenerDatos();
  }, []);


  const filteredItems = categoria.filter((item) =>
    item.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleChange = (e) => {
    const value = e.target.value;

    setPreview(true);
//dsa
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

        {/* Mobile */}
        <div
          className={`md:hidden`}
          >
            <InputSrc  handleChange={handleChange} handleBlur={handleBlur} preview={preview} filteredItems={filteredItems} setPreviewLimit={setPreviewLimit} previewLimit={previewLimit}></InputSrc>
        </div>

        {/*Desktop */}
        <div className="bg-[#EEEEEE] hidden md:grid gap-2 rounded-3xl pb-9 pt-12 mt-3 grid-cols-2">
          <img className="mx-auto" src={agenda} alt="" />
          <div>
            <h3 className={styles.titleSecondary}>
              Encuentra tu especialista y agenda una cita
            </h3>


           {/* <div className="relative mt-5">
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
                         to={`/search-doctors/${item.nombre}`} id={item.id}
                          onClick={(e) => e.stopPropagation()}>
                          <div
                            className={`${styles.contenedorItems} hover:bg-slate-200 cursor-pointer p-2  grid grid-cols-[auto,1fr,auto] gap-4 items-center w-f mb-4 `}
                            key={item.id}
                            onMouseEnter={blur}>
                            <IconSearch />
                            <h3 className="text-base cursor-pointer ">
                              {item.nombre}
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
        </div> */}

        {/* */}

      {/*  {slide ? (
          <div className={styles.sugerencias}>
            <h2 className={styles.titleSugerencia}>Sugerencias</h2>
            {categoria.map((category) => (
              <NavLink to="/search-doctors" key={category.id}>
                <div>
                  <h3
                    className={`${styles.category} mb-4 text-blue-600 hover:text-blue-800 cursor-pointer`}>
                    {category.nombre}
                  </h3>
                </div>
              </NavLink>
            ))}
          </div>
        ) : null} */}

            <InputSrc handleChange={handleChange} handleBlur={handleBlur} preview={preview} filteredItems={filteredItems} setPreviewLimit={setPreviewLimit} previewLimit={previewLimit}></InputSrc>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Search;