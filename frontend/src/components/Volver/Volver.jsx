import { useNavigate } from 'react-router-dom'
import styles from './Volver.module.css'

const Volver = (props) => {
    const navigate = useNavigate()
    return (
        <div className={styles.containerVolver}>
            <button onClick={()=> navigate(-1)}>
                <img src="./Back.svg" alt="back arrow" />
                <p>{props.title}</p>
            </button>
        </div>
    )
}

export default Volver