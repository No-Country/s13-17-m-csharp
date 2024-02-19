import styles from './Volver.module.css'

const Volver = () => {
    return (
        <div className={styles.containerVolver}>
            <button>
                <img src="./Back.svg" alt="back arrow" />
                <p>Titulo por props</p>
            </button>
        </div>
    )
}

export default Volver