import { useState } from 'react';
import './App.css';
import Test from './components/test';
import { Header } from './components/shared/Header/Header';
import { Footer } from './components/shared/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Test />
      <Footer />
    </>
  );
}

export default App;
