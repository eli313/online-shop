import './App.css';
import React from 'react';

import Cards from './Components/Cards';
import NavBar from './Components/NavBar';
import ContextProvider from './context/contextProvider';

// Context
import HandlersProvider from './context/HandlersProvider';
function App() {
  return (
    <ContextProvider>
      <HandlersProvider>
        <NavBar/>
        <Cards/>
      </HandlersProvider>
    </ContextProvider>
  );
}

export default App;
