import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Valoracion from '../Valoracion/Valoracion';

const DoctorData = () => {
    const [showValoracion, setShowValoracion] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/agenda') {
            setShowValoracion(false);
        } else {
            setShowValoracion(true);
        }
    }, [location.pathname]);

    return (
        <main className="flex font-font-text">
            <img
            className="w-20 h-20 rounded-2xl  md:ml-[10px] md:mt-[5px]  md:w-28 md:h-[120px] s:rounded-[20px] md:rounded-md"
            alt="Doctor photo"
            src="https://s3-alpha-sig.figma.com/img/7e0c/b38b/60ad07e034d453ccc86a9d4d76b16678?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LKi2G8VdSopmaitsCGiFTw9LPHE5qaNp1h~Kj-849qJSegNnmDvV-q0CxJc7WpXUpElwH4yZVujMvVGU7-KR58qmjJZ~cM40wHGXHojxXKuECdD53B48pJj1T5mbkYo2FdyAlQzGrluHjwOBIvwauiyDk2p4yiZuTo8jQkDekn4WSxb5-uddwQyc1A0fFlxlOrK17ItI8BxgNkhWAw5Y60IRzo5ekhdB0BIG7VrpTMTIpKcy1oXOzDZSfEnw8~Sxz6pbIppGN2sISmQTfrgAUYP1NeuWkIraYXWsXnzcDJnYfDiVFiAT8jI~4WMwC6I38dAC~SLflQmoIOqnsh5fnw__"
            />
            <section className="ml-2 md:mt-[5px]">
                <h2 className="ml-[7px] text-base font-medium mb-2 md:text-lg text-[#333333]">
                Dra. Gimenez, Laura
                </h2>
                <p className="ml-[7px] text-sm font-medium mb-2 md:text-base md:text-[#627282] text-[#333333]">
                Oftalmóloga
                </p>
                {showValoracion && <Valoracion />}
            </section>
        </main>
    );
}

export default DoctorData;
