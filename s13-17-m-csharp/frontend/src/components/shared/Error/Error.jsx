import styles from './Error.module.css'

const Error = () => {
    return (
        <section className={styles.container}>
            <img className={styles.img} src="./error.svg" alt="icono de error"/>
            <h1 className={styles.title} >Usuario o contraseña equivocada</h1>
        </section>
    )
}

export default Error