import react from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Assignment from './components/Assignment';
import Course from './components/Course';
import CourseApi from './components/CourseApi';
import Home from './components/Home'
import Login from './components/Login';
import ShirtSub from './components/ShirtSub';
import Signup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import Emi from './components/Emi';
import Emi1 from './components/Emi1';
import Medi from './components/Medi'

function Routing() {
  return (
    <BrowserRouter>


      <Route exact path='/' component={Medi} />
      <Route path='/product/:id' component={ShirtSub} />
      <Route path='/emi' component={CourseApi} />
      <Route path='/calc' component={Emi1} />

    </BrowserRouter>
  );
}

export default Routing;
