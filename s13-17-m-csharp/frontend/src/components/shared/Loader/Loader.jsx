import { MutatingDots } from 'react-loader-spinner'
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={`${styles.bgContenedor}`}>
        <div className={styles.bgWhite}>
                <section className='text-center align-center flex'>
                <MutatingDots
                    visible={true}
                    height="150"
                    width="150"
                    color="var(--color-primary)"
                    secondaryColor="var(--color-secondary)"
                    strokeColor="var(--color-bg-mobile)"
                    radius="16.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
                </section>
        </div>
    </div>

)
}

export default Loader