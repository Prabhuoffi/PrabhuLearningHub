import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/user/pages/Navbar';
import Home from './components/user/pages/Home';
import Catalog from './components/user/pages/Catalog';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/catalog" element={ <Catalog/>}/>
          
        
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
