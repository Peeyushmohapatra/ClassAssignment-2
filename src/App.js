import { useContext } from 'react';
import './App.css';
import Home from './Compenents/Home/Home';
import Login from './Compenents/Login/Login';
import Navbar from './Compenents/Navbar/Navbar';
import { Global } from './Compenents/store';

function App() {
  const {valid} = useContext(Global);
  
  return (
    <div className="App">

      {valid ? <div><Navbar/> <Home/></div> : <Login/>}
    </div>
  );
}

export default App;
