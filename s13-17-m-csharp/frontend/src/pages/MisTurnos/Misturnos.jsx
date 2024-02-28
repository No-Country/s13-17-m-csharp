// import React from 'react'
// import style from './Misturnos.module.css'

import TurnoAsignado from "../../components/TurnoAsignado/TurnoAsignado"

const Misturnos = () => {
    return (
        <main className="w-[91%] bg-color-cards mx-auto lg:p-0 p-3 rounded md:w-[72%] lg:bg-color-cards-desk lg:p-3 ">
            <p className="ml-[7px] text-md underline font-medium mb-2 md:text-base text-[#333333]">Turno asignado</p>
            <div className="m-[20px] ">
                <p className="text-sm italic font-medium md:text-base text-[#333333]">Dra. Gimenez, Laura</p>
                <p className="text-sm italic font-medium mb-2 md:text-base text-[#333333]">Oftalmóloga</p>
                <TurnoAsignado/>
                <br />   
            </div>
        </main>
        
    )
}

export default Misturnos