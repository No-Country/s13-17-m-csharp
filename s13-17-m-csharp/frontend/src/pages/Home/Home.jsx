/* eslint-disable react/prop-types */
import { Fade } from 'react-awesome-reveal';
import Slider from '../../components/Slider/Slider'
import Staff from '../../components/Staff/Staff'
import Search from '../../components/search/Search'
import Icon from '../../components/shared/Icon/Icon'
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={styles.contenedorPadre}>
                    <Fade triggerOnce="true" damping="0.2" cascade>
                        <Slider />
                        <Staff />
                        <Search />

                    </Fade>
            </div>
            <Icon />
        </>
    )
}

export default Home