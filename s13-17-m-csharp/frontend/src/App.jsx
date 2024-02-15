import { useState } from 'react';
import './App.css';
import Test from './components/test';
import { Header } from './components/shared/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Test />
    </>
  );
}

export default App;
