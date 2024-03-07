/* eslint-disable react/prop-types */
import Slider from '../../components/Slider/Slider'
import Staff from '../../components/Staff/Staff'
import Search from '../../components/search/Search'
import Icon from '../../components/shared/Icon/Icon'
import { Layout } from '../../components/shared/Layout/Layout'
// import styles from './Home.module.css'

const Home = ({isLoggedIn,setIsLoggedIn}) => {
    return (
        <>
            <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Slider />
                <Staff />
                <Search />
                <Icon />
            </Layout>
        </>
    )
}

export default Home