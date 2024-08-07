import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/user/pages/Navbar';
import Home from './components/user/pages/Home';
import Catalog from './components/user/pages/Catalog';
import About from './components/user/pages/About';
import Contact from './components/user/pages/Contact';
import Signin from './components/user/pages/Signin';
import Signup from './components/user/pages/Signup';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/catalog" element={ <Catalog/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/signup" element={ <Signup/>}/>
        <Route path="/signin" element={ <Signin/>}/>  
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
