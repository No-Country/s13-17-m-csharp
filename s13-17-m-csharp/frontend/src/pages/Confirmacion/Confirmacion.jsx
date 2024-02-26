import style from './Confirmacion.module.css'

const Confirmacion = () => {
    return (
        <main className="flex flex-col justify-center text-center md:bg-color-bg-desk">
            <div className={style.container}>
                <section>
                    <h2>¡Tu turno ha sido confirmado!</h2>
                </section>
                <section className="flex justify-center">
                    <img src="Confirmed2.svg" alt="" />
                </section>
                <section>
                    <p>
                    No olvides cancelar tu turno en caso de no poder asistir.
                    </p>
                    <p>
                        <a href="">
                            Cancelar turno.
                        </a>
                    </p>
                </section>
            </div>
        </main>
    )
}

export default Confirmacion