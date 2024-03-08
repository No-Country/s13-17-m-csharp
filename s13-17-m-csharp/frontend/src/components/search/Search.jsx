import { useState } from 'react';
import InputSrc from './InputSearch/InputSrc';
// import { categoriasTurnosMedicos } from '../../utils/Categorias';
import styles from './search.module.css';
import agenda from '../../assets/agenda.svg';
import { useEffect } from 'react';
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
        console.error(error);
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
      }, 1000);
    }
  };

  return (
    <div>
      <div className={styles.contenedor}>
        <h2 className={`${styles.title} mt-5`}>Agenda tu turno</h2>

        {/* Mobile */}
        <div className={`md:hidden`}>
            <InputSrc  handleChange={handleChange} handleBlur={handleBlur} preview={preview} filteredItems={filteredItems} setPreviewLimit={setPreviewLimit} previewLimit={previewLimit}></InputSrc>
        </div>

        {/*Desktop */}
        <div className="bg-[#EEEEEE] hidden md:grid gap-2 rounded-3xl pb-9 pt-12 mt-3 grid-cols-2">
          <img className="mx-auto" src={agenda} alt="" />
          <div>
            <h3 className={styles.titleSecondary}>
              Encuentra tu especialista y agenda una cita
            </h3>
            <InputSrc handleChange={handleChange} handleBlur={handleBlur} preview={preview} filteredItems={filteredItems} setPreviewLimit={setPreviewLimit} previewLimit={previewLimit}></InputSrc>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Search;