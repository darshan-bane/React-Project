import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './component/Header';
import Cart from './Cart';


const App = ()  => {
  return(
    <Router>
      <Header/>
      <Routes>

       <Route path='/' element={<Home />}/>
       <Route path='/about' element={<About />}/>
       <Route path='/contact' element={<Contact />}/>
       <Route path='/cart' element={<Cart />}/>
      </Routes>
    </Router>
  )
} 

export default App;
