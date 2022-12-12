import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './formularios.css';
import './index.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Eventsmain from './components/pages/Eventsmain';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/eventsmain' component={<Eventsmain/>} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
    </Routes>
    </Router>
);
}

export default App;