import React, {Component} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import Product from './components/Product/Product';
import Member from './components/Member/Member';

class App extends Component {
  render() {
    return (
    <div>
      <Header />
        <Route exact={true} path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/categories' component={Categories} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/profile' component={Profile} />
        <Route path='/product' component={Product} />
        <Route path='/Member' component={Member} />
      <Footer />
      
      
    </div>
    );
  }
}

export default App;
