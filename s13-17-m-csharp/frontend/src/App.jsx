// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   Navigate
// } from 'react-router-dom';
// import { useState } from 'react';
// import Login from './pages/Login/Login';
// import Inicio from './pages/Inicio/Inicio';
// import Register1 from './pages/Registros/Register1';
// import Register2 from './pages/Registros/Register2';
// import { Layout } from './components/shared/Layout/Layout';
// import { DoctorCard } from './components/DoctorCard/DoctorCard';
// import Volver from './components/Volver/Volver';
// import Home from './pages/Home/Home';
// import Turno from './pages/Turno/Turno';
// import Nosotros from './pages/Nosotros/Nosotros';
// import Confirmacion from './pages/Confirmacion/Confirmacion';
// import Misturnos from './pages/MisTurnos/Misturnos';
// import './App.css';
// import { SearchResults } from './pages/SearchResults/SearchResults';
// import { Agenda } from './pages/Agenda/Agenda';

// function App() {
//   // state para saber si está registrado o no
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route 
//           path='/' 
//           element={
//             <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
//           }
//         />
//         <Route 
//           path='/inicio' 
//           element={
//             <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
//               <Volver title={"Volver"} />
//               <Inicio  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
//             </Layout>
//           }
//         />
//         <Route 
//           path='/login' 
//           element={
//             <Layout>
//               <Volver title={"Volver"} />
//               <Login/>
//             </Layout>
//           }
//         />
//         <Route 
//           path='/register/step1' 
//           element={
//             <Layout>
//               <Volver title={"Volver"} />
//               <Register1 />
//             </Layout>
//           }
//         />
//         <Route 
//           path='/register/step2' 
//           element={
//             <Layout>
//               <Volver title={"Volver"} /> 
//               <Register2 />
//             </Layout>
//           }
//         />
//         <Route 
//           path='/docProfile' 
//           element={
//             <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
//               <Volver title={"Volver"} />
//               <DoctorCard />
//             </Layout>
//           }
//         />
//         <Route 
//           path='/confirm' 
//           element={
//             isLoggedIn ? (
//             <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
//               <Volver title={"Confirmar fecha"} />
//               <Turno />
//             </Layout>) : (<Navigate to="/inicio" />)
//           }
//         />
//         <Route 
//           path='/confirmacion' 
//           element={
//             <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
//               <Confirmacion />
//             </Layout>
//           }
//         />
//         <Route
//           path="/nosotros"
//           element={
//             <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
//               <Volver title={'Volver'} />
//               <Nosotros />
//             </Layout>
//           }
//         />
//         <Route 
//           path='/misturnos' 
//           element={
//             <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
//               <Volver title={"Ir al Home"} />
//               <Misturnos />
//             </Layout>
//           }
//         />
//         <Route 
//           path="/search-doctors" 
//           element={
//             <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
//               <Volver title={"Volver"} />
//               <SearchResults />
//             </Layout>
//           } 
//         />
//         <Route 
//           path="/agenda" 
//           element={
//             <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
//               <Volver title={"Volver"} />
//               <Agenda />
//             </Layout>
//           } 
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;









import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Register1 from './pages/Registros/Register1';
import Register2 from './pages/Registros/Register2';
import { Layout } from './components/shared/Layout/Layout';
import { DoctorCard } from './components/DoctorCard/DoctorCard';
import Volver from './components/Volver/Volver';
import Home from './pages/Home/Home';
import Turno from './pages/Turno/Turno';
import Nosotros from './pages/Nosotros/Nosotros';
import Confirmacion from './pages/Confirmacion/Confirmacion';
import Misturnos from './pages/MisTurnos/Misturnos';
import './App.css';
import { SearchResults } from './pages/SearchResults/SearchResults';
import { Agenda } from './pages/Agenda/Agenda';

function App() {
  // state para saber si está registrado o no
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  return (
    <BrowserRouter>
      <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
      <Routes>
        <Route 
            path='/' 
            element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
        />

        <Route 
          path='/inicio' 
          element={<><Volver title={"Volver"} /><Inicio/></>}
        />

        <Route 
            path='/login' 
            element={<><Volver title={"Volver"} /><Login  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/></>}
        />
        
        <Route 
            path='/docProfile' 
            element={<><Volver title={"Volver"} /><DoctorCard /></>}
        />

        <Route 
          path="/search-doctors" 
          element={<><Volver title={"Ir al home"} /><SearchResults /></>} 
          
        />

        <Route 
          path='/register/step1' 
          element={<><Volver title={"Volver"} /><Register1 /></>}
        />

        <Route 
          path='/register/step2' 
          element={<><Volver title={"Volver"} /><Register2  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/></>}
        />
        <Route 
          path='/confirm' 
          element={
            isLoggedIn ? (
            <>
              <Volver title={"Modificar fecha"} />
              <Turno />
            </>) : (<Navigate to="/inicio" />)
          }
        />
        <Route 
          path='/confirmacion' 
          element={<Confirmacion />}
        />
        <Route
          path="/nosotros"
          element={<><Volver title={'Volver'} /><Nosotros /></>}
        />
        <Route 
          path='/misturnos' 
          element={<><Volver title={"Ir al Home"} /><Misturnos /></>}
        />
        <Route 
          path="/agenda" 
          element={<><Volver title={"Ver otros médicos"} /><Agenda /></>} 
        />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
