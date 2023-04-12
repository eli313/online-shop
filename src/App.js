import './App.css';
import Cards from './Components/Cards';
import NavBar from './Components/NavBar';
import ContextProvider from './context/contextProvider';

function App() {
  return (
    <ContextProvider>
      <NavBar/>
      <Cards/>
    </ContextProvider>
  );
}

export default App;
