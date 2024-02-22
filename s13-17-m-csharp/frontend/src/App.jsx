import './App.css';
// import Test from './components/test';
import { Header } from './components/shared/Header/Header';
import Search from './components/search/Search'
import Login from './pages/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Register1 from './pages/Registros/Register1';
import Register2 from './pages/Registros/Register2';
import { Layout } from './components/shared/Layout/Layout';
import Volver from './components/Volver/Volver';

function App() {
  return (
    <>
      <Layout>
        <Volver />
        <Login />
        <Search/>
        <Inicio />
        <Register1 />
        <Register2 />
        {/* <Test /> */}
      </Layout>
    </>
  );
}

export default App;
