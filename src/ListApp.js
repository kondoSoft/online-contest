import React, { Component } from 'react';
import './css/style.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ListUser from './components/list-user'


class ListApp extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <ListUser/>
        <Footer/>
      </div>

    );
  }
}



export default ListApp;
