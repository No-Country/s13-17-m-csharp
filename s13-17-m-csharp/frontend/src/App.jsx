import { useState } from 'react';
import './App.css';
import Test from './components/test';
import { Header } from './components/shared/Header/Header';
import Login from './pages/Login/Login';
import Inicio from './pages/Inicio/Inicio';
import Register1 from './pages/Registros/Register1';
import Register2 from './pages/Registros/Register2';

function App() {
  return (
    <>
      <Login />
      <Inicio />
      <Register1 />
      <Register2 />
    </>
  );
}

export default App;
