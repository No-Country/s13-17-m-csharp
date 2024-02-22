import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Register1 from './pages/Registros/Register1';
import Register2 from './pages/Registros/Register2';
import { Layout } from './components/shared/Layout/Layout';
import Volver from './components/Volver/Volver';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/inicio' element={<Layout>
                                            <Inicio />
                                          </Layout>}/>
        <Route path='/login' element={<Layout>
                                        <Login />
                                      </Layout>}/>
        <Route path='/register/step1' element={<Layout>
                                        <Register1 />
                                      </Layout>}/>
        <Route path='/register/step2' element={<Layout>
                                        <Register2 />
                                      </Layout>}/>
                


          {/* <Slider/>
          <Staff/>
          <Search/>
          <Volver />
          <Inicio />
          <Register1 />
          <Register2 /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
