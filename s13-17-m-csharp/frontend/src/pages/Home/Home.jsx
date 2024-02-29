/* eslint-disable react/prop-types */
import Slider from '../../components/Slider/Slider'
import Staff from '../../components/Staff/Staff'
import Search from '../../components/search/Search'
import Icon from '../../components/shared/Icon/Icon'
import { Layout } from '../../components/shared/Layout/Layout'
import styles from './Home.module.css';

const Home = ({isLoggedIn,setIsLoggedIn}) => {
    return (
        <>
            <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <div className={styles.contenedorPadre}>
                    <Slider />
                    <Staff />
                    <Search />
                </div>
                <Icon />
            </Layout>
        </>
    )
}

export default Home