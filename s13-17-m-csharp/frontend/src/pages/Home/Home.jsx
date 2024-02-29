/* eslint-disable react/prop-types */
import Slider from '../../components/Slider/Slider'
import Staff from '../../components/Staff/Staff'
import Search from '../../components/search/Search'
import Icon from '../../components/shared/Icon/Icon'
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={styles.contenedorPadre}>
                <Slider />
                <Staff />
                <Search />
            </div>
            <Icon />
        </>
    )
}

export default Home