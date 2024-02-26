import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Register1 from './pages/Registros/Register1';
import Register2 from './pages/Registros/Register2';
import { Layout } from './components/shared/Layout/Layout';
import { DoctorCard } from './components/DoctorCard/DoctorCard';
import Volver from './components/Volver/Volver';
import Home from './pages/Home/Home';



import Slider from './components/Slider/Slider';
import { useState } from 'react';
import Staff from './components/Staff/Staff';
import Search from './components/search/Search';

function App() {

  // state para saber si está registrado o no  
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/inicio"
          element={
            <Layout>
              <Volver title={'Volver'} />
              <Inicio />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Volver title={'Volver'} />
              <Login isLoggedIn={isLoggedIn}  setIsLoggedIn= {setIsLoggedIn} />
            </Layout>
          }
        />
        <Route
          path="/register/step1"
          element={
            <Layout>
              <Volver title={'Volver'} />
              <Register1 />
            </Layout>
          }
        />
        <Route
          path="/register/step2"
          element={
            <Layout>
              <Volver title={'Volver'} />
              <Register2 />
            </Layout>
          }
        />
        <Route
          path="/docProfile"
          element={
            <Layout>
              <Volver title={'Volver'} />
              <DoctorCard />
            </Layout>
          }
        />

<Route
          path="/logueado"
          element={
            isLoggedIn ? (
              <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Slider />
                <Staff />
                <Search />
              </Layout>
            ) : (
              <Navigate to="/" /> 
            )
          }
        />

        {/*
          <Volver />
          <Inicio />
          <Register1 />
          <Register2 /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
