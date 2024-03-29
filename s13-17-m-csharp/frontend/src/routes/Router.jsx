import { BrowserRouter, Route, Routes, useLocation  } from 'react-router-dom';
import { DoctorCard } from '../components/DoctorCard/DoctorCard';
import Login from '../pages/Login/Login';
import Inicio from '../pages/Inicio/Inicio';
import Register1 from '../pages/Registros/Register1';
import Register2 from '../pages/Registros/Register2';
import { Layout } from '../components/shared/Layout/Layout';
import Home from '../pages/Home/Home';
import Turno from '../pages/Turno/Turno';
import Nosotros from '../pages/Nosotros/Nosotros';
import Confirmacion from '../pages/Confirmacion/Confirmacion';
import Misturnos from '../pages/MisTurnos/Misturnos';
import { SearchResults } from '../pages/SearchResults/SearchResults';
import { Agenda } from '../pages/Agenda/Agenda';
import { NoAuthWrapper } from './NoAuthRouteWrapper';
import { AuthRouteWrapper } from './AuthRouteWrapper';
import Loader from '../components/shared/Loader/Loader';
import { useEffect } from 'react';

//hace que el scroll vuelva arriba cuando el pathname cambia
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/loader" element={<Loader />}></Route>
          <Route path="/" element={<Home />} />

          <Route
            path="/inicio"
            element={
              <NoAuthWrapper>
                <Inicio />
              </NoAuthWrapper>
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
            path="/search-doctors/:especialidad"
            element={<SearchResults />}
          />

          <Route
            path="/register/step1"
            element={
              <NoAuthWrapper>
                <Register1 />
              </NoAuthWrapper>
            }
          />

          <Route
            path="/register/step2"
            element={
              <NoAuthWrapper>
                <Register2 />
              </NoAuthWrapper>
            }
          />
          <Route
            path="/confirm"
            element={
              <AuthRouteWrapper>
                <Turno />
              </AuthRouteWrapper>
            }
          />
          <Route
            path="/confirmacion"
            element={
              <AuthRouteWrapper>
                <Confirmacion />
              </AuthRouteWrapper>
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route
            path="/misturnos"
            element={
              <AuthRouteWrapper>
                <Misturnos />
              </AuthRouteWrapper>
            }
          />

          <Route path="/agenda/:doctorId" element={<Agenda />} />

          <Route path="/doctor" element={<DoctorCard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { Router };
