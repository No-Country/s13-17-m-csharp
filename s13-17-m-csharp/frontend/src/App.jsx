//import { useState } from 'react';
import './App.css';
import Test from './components/test';
import Staff from './components/shared/Staff/Staff';
import { Header } from './components/shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Test />
      <p className='p-16 text-center h-30 bg-teal-100'>Aqui va el Carrusel</p>
      <Staff/>
    </>
  );
}

export default App;
