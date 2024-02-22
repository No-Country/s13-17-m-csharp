//import { useState } from 'react';
import './App.css';
import Test from './components/test';
import Staff from './components/Staff/Staff';
import { Header } from './components/shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Test />
     
      <Staff/>
    </>
  );
}

export default App;
