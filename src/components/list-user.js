import React, {Component} from "react";
import {ButtonPrint} from './buttons';
import TableUser from './table-user';
import { Link } from 'react-router';

class ListUser extends Component {
  render(){
    return (
      <main className="container">
        <Breadcrumb/>
        <div className="section level">
          <div className="level-left">
            <h1 className="subtitle is-3">Lista de Reservaciones</h1>
          </div>
          <Search/>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns is-desktop ">
              <TableUser/>
            </div>
            <ButtonPrint/>
          </div>
        </section>
      </main>
    )
  }
}

class Search extends Component{
  render(){
    return(
      <div className="level-right" >
        <p className="control "><input className="input" type="text" name="name" value="" size="50" placeholder="Buscar Participante"/></p>
      </div>
    )
  }
}

class Breadcrumb extends Component{
  render(){
    return(
      <div className="section">
        <p className=" "><Link to="/">Home</Link> > Lista de usuarios</p>
      </div>
    )
  }
}

export default ListUser;
