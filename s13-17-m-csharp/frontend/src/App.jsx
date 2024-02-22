import './App.css';
import Slider from './components/Slider/Slider';
import Staff from './components/Staff/Staff';
import Search from './components/search/Search';
import Login from './pages/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Register1 from './pages/Registros/Register1';
import Register2 from './pages/Registros/Register2';
import { Layout } from './components/shared/Layout/Layout';
import { DoctorCard } from './components/DoctorCard/DoctorCard';
import Volver from './components/Volver/Volver';

function App() {
  return (
    <>
      <Layout>
        <Slider />
        <Staff />
        <Search />
        <Volver />
        <DoctorCard />
        <Login />
        <Inicio />
        <Register1 />
        <Register2 />
      </Layout>
    </>
  );
}

export default App;
