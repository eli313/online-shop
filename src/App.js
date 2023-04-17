import './App.css';
import React from 'react';
import { Routes , Route , Navigate } from 'react-router-dom';

// Components 
import Cards from './Components/Cards';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Cart from "./Components/Cart"

// Context
import HandlersProvider from './context/HandlersProvider';
import ContextProvider from './context/contextProvider';

function App() {
  return (
    <ContextProvider>
      <HandlersProvider>
        <NavBar/>
        <Routes>
          <Route path='/homepage' element={<HomePage/>} />
          <Route path='/products' element={<Cards/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/*' element={<Navigate to={<HomePage/>} />} />
        </Routes>
      </HandlersProvider>
    </ContextProvider>
  );
}

export default App;
