import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route, NavLink  } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Treat from './components/Contact/Contact';
import Header from './components/Header/Header';
import NavComp from './components/NavComp/NavComp';
import ServiceH from './components/Service/ServiceH';
import Service from './components/Service/Service';
import { Container } from 'react-bootstrap';
import AboutH from './components/About/AboutH';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavComp></NavComp>
      <Footer></Footer>
    </div>
  );
}

export default App;
