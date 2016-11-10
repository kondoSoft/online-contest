import React, {Component} from "react";
import {Buttons} from './buttons';


class FormUser extends Component{
  render(){
    return (
      <main className="container">
        <section className="section">
          <div className="container">
            <div className="columns is-desktop ">
              <div className="column is-half is-offset-one-quarter">
                <hr/>
                <h1 className="subtitle is-3 has-text-centered">Datos de Usuario</h1>
                <div className="control">
                  <label className="label">Nombre:</label>
                  <p className="control">
                    <input className="input is-primary " type="text"placeholder="Nombre"/>
                  </p>
                  <label className="label">Direccion:</label>
                  <p className="control">
                    <input className="input is-primary" type="text"placeholder="Direccion"/>
                  </p>
                  <label className="label">Telefono:</label>
                  <p className="control">
                    <input className="input is-primary" type="text"placeholder="Telefono"/>
                  </p>
                  <label className="label">Correo Electronico:</label>
                  <p className="control">
                    <input className="input is-primary" type="text"placeholder="Correo Electronico"/>
                  </p>
                  <hr/>
                  <h1 className="subtitle is-3 has-text-centered">Datos de Reservacion</h1>
                  <label className="label">No. de Reservacion:</label>
                  <p className="control">
                    <input className="input is-primary" type="text"placeholder="Reservacion"/>
                  </p>
                  <label className="label">Proveedor:</label>
                  <p className="control">
                    <input className="input is-primary" type="text"placeholder="Proveedor"/>
                  </p>
                  <label className="label">Precio:</label>
                  <p>
                    $1600
                  </p>
                  <Buttons/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default FormUser;
