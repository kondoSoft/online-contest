import React, { Component } from 'react';
import './css/App.css';
import './css/style.css';
import Navbar from './components/navbar';
import FormUser from './components/form-user';
import Footer from './components/footer';

class FormApp extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <FormUser/>
        <Footer/>
      </div>

    );
  }
}


export default FormApp;
