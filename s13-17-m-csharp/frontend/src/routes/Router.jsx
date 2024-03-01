import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { useState } from 'react';
import Login from '../pages/Login/Login';
import Inicio from '../pages/Inicio/Inicio';
import Register1 from '../pages/Registros/Register1';
import Register2 from '../pages/Registros/Register2';
import { Layout } from '../components/shared/Layout/Layout';
import { DoctorCard } from '../components/DoctorCard/DoctorCard';
import Volver from '../components/Volver/Volver';
import Home from '../pages/Home/Home';
import Turno from '../pages/Turno/Turno';
import Nosotros from '../pages/Nosotros/Nosotros';
import Confirmacion from '../pages/Confirmacion/Confirmacion';
import Misturnos from '../pages/MisTurnos/Misturnos';
import '../App.css';
import { SearchResults } from '../pages/SearchResults/SearchResults';
import { Agenda } from '../pages/Agenda/Agenda';
import { NoAuthWrapper } from './NoAuthRouteWrapper';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/inicio"
            element={
              <>
                <Volver title={'Volver'} />
                <Inicio />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <NoAuthWrapper>
                <Login />
              </NoAuthWrapper>
            }
          />

          <Route
            path="/docProfile"
            element={
              <>
                <Volver title={'Volver'} />
                <DoctorCard />
              </>
            }
          />

          <Route
            path="/search-doctors"
            element={
              <>
                <Volver title={'Ir al home'} />
                <SearchResults />
              </>
            }
          />

          <Route
            path="/register/step1"
            element={
              <NoAuthWrapper>
                <Volver title={'Volver'} />
                <Register1 />
              </NoAuthWrapper>
            }
          />

          <Route
            path="/register/step2"
            element={
              <NoAuthWrapper>
                <Volver title={'Volver'} />
                <Register2 />
              </NoAuthWrapper>
            }
          />
          <Route path="/confirm" element={<Turno />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
          <Route
            path="/nosotros"
            element={
              <>
                <Volver title={'Volver'} />
                <Nosotros />
              </>
            }
          />
          <Route
            path="/misturnos"
            element={
              <>
                <Volver title={'Ir al Home'} />
                <Misturnos />
              </>
            }
          />
          <Route
            path="/agenda"
            element={
              <>
                <Volver title={'Ver otros médicos'} />
                <Agenda />
              </>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { Router };
