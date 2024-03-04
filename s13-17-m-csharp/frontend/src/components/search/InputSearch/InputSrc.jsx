/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles from '../search.module.css'
import IconSearch from '../IconSearch';
import lupa from '../../../assets/lupa.svg';
import arrow from '../../../assets/arrow.svg';

const InputSrc = ({handleBlur, handleChange, preview, filteredItems, setPreviewLimit, previewLimit}) => {
    return (
        <>
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
                        <div key={item.id}>
                        <Link to={'/search-doctors'}>
                            <div
                                className={`${styles.contenedorItems} hover:bg-slate-200 cursor-pointer p-2  grid grid-cols-[auto,1fr,auto] gap-4 items-center w-f mb-4 `}
                                key={item.id}
                                onMouseEnter={blur}>
                                    <IconSearch key={item.id}/>
                                    <h3  className="text-base cursor-pointer ">
                                        {item.name}
                                    </h3>
                                    <span className="text-sm  text-gray-500">
                                        Especialidad
                                    </span>
                            </div>
                        </Link>
                        </div>
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
                <img className={`${styles.img} md:hidden`} src={arrow} alt="" />
            </div>
        </>
    )
}

export default InputSrc