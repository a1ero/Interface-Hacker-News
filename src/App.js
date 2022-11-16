import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Header/>
    </BrowserRouter>   
  );
}
export default App;
