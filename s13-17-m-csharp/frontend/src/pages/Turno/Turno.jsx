import { NavLink } from 'react-router-dom'
import DoctorData from '../../components/DoctorData/DoctorData'
import ButtonContinuar from '../../components/shared/Buttons/ButtonContinuar/ButtonContinuar'
import style from'./Turno.module.css'

const Turno = () => {
    return (
        <>
            <article className="w-[91%] bg-color-cards mx-auto lg:p-0 p-3 rounded md:w-[72%] lg:bg-color-cards-desk lg:p-3 ">
                <section className="s:w-[55%] md:w-[100%]">
                    <DoctorData />
                    <footer className="md:hidden md:mt-0 mt-4 rounded-md flex-column justify-between items-center bg-white py-1 text-xs font-normal font-font-title">
                        <div className='space-y-3 space-x-[6px] font-font-text'>
                            <br />
                            <p className="ml-[7px] text-sm font-medium mb-2 md:text-base text-[#333333]">Fecha: Lunes 27/02</p>
                            <p className="ml-[7px] text-sm font-medium mb-2 md:text-base text-[#333333]">Hora 12:30</p>
                            <p className="ml-[7px] text-sm font-medium mb-2 md:text-base text-[#333333]">Dirección: Av. Independencia 265</p>
                        </div>
                        <div className='md:hidden flex justify-center mt-20 mb-2'>
                            <NavLink to='/confirmacion'>
                                <ButtonContinuar title='Confirmar'/>
                            </NavLink>
                        </div>
                    </footer>
                </section>  
            </article>
            <article className="w-[91%] mx-auto md:p-0 p-3 rounded md:w-[72%] ">
                <section className="s:w-[55%] md:w-[100%]">
                    <footer className="hidden md:flex md:flex-col rounded-md flex-column justify-between bg-white py-1 text-xs font-normal font-font-title">
                        <div className='space-y-3 space-x-[6px] intems-left font-font-text'>
                            <br />
                            <div className={style.parent}>
                                <div className={style.div1}>
                                    <div>
                                        <img className='w-[16px] h-[16px]' src="./Vector.svg" alt="calendar.svg"/><p className="ml-[7px] text-[16px] font-[600] mb-2 md:text-base text-[#333333]">Fecha:</p>
                                    </div>
                                </div>
                                <div className={style.div2}>
                                    <p className="ml-[7px] text-[16px] font-[600] mb-2 md:text-base text-[#333333]">17 Feb 2024, 16:00</p>
                                    <button className="ml-[7px] text-[16px] font-[600] mb-2 md:text-base text-[#1662C6]">Cambiar la fecha</button>
                                </div>
                                <div className={style.div3}>
                                    <div>
                                        <img className='w-[16px] h-[16px] div3' src="./location.svg" alt="location.svg" /><p className="ml-[7px] text-[16px] font-[600] mb-2 md:text-base text-[#333333]">Dirección:</p>
                                    </div>
                                </div>
                                <div className={style.div4}>
                                    <p className="ml-[7px] text-sm font-[600] mb-2 md:text-base text-[#333333] div4">Av. Próceres De La Independencia N°1722, S.J.L. piso 3, Lima</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-20 mb-2'>
                            <NavLink to='/confirmacion'>
                                <ButtonContinuar title='Confirmar'/>
                            </NavLink>
                        </div>
                    </footer>
                </section>  
            </article>
        </>
    )
}
export default Turno