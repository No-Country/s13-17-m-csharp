import Slider from '../../components/Slider/Slider'
import Staff from '../../components/Staff/Staff'
import Search from '../../components/search/Search'
import { Layout } from '../../components/shared/Layout/Layout'
import styles from './Home.module.css'

const Home = () => {
    return (
        <>
            <Layout>
                <Slider />
                <Staff />
                <Search />
            </Layout>
        </>
    )
}

export default Home