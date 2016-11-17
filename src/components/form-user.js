import React, {Component} from "react";
import {Buttons} from './buttons';
import request from 'superagent'

class FormUser extends Component{
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(e){
    e.preventDefault()
    request.post(e.target.action)
    .send({
        name       : this.refs.name.value,
        address    : this.refs.address.value,
        phone      : this.refs.phone.value,
        reservation: this.refs.reservation.value,
        email      : this.refs.email.value,
        checked    : '',
        provider   : this.refs.provider.value,
        tickets    : ''
    })
    .set('Accept', 'application/json')
    .end(function(err, res){
      if(err){
        console.log(err);
      }
      console.log(JSON.parse(res.text).code);
    })
  }
  render(){
    return (
      <main className="container">
        <section className="section">
          <div className="container">
            <div className="columns is-desktop ">
              <div className="column is-half is-offset-one-quarter">
                <hr/>
                <form to='/listUser' method="POST" onSubmit={this.submit} action='http://localhost:8080/user'>
                  <h1 className="subtitle is-3 has-text-centered">Datos de Usuario</h1>
                  <div className="control">
                    <label className="label">Nombre:</label>
                    <p className="control">
                      <input ref='name' className="input is-primary " type="text"placeholder="Nombre"/>
                    </p>
                    <label className="label">Direccion:</label>
                    <p className="control">
                      <input ref='address' className="input is-primary" type="text"placeholder="Direccion"/>
                    </p>
                    <label className="label">Telefono:</label>
                    <p className="control">
                      <input ref='phone' className="input is-primary" type="text"placeholder="Telefono"/>
                    </p>
                    <label className="label">Correo Electronico:</label>
                    <p className="control">
                      <input ref='email' className="input is-primary" type="text"placeholder="Correo Electronico"/>
                    </p>
                    <hr/>
                    <h1 className="subtitle is-3 has-text-centered">Datos de Reservacion</h1>
                    <label className="label">No. de Reservacion:</label>
                    <p className="control">
                      <input ref='reservation' className="input is-primary" type="text"placeholder="Reservacion"/>
                    </p>
                    <label className="label">Proveedor:</label>
                    <p className="control">
                      <input ref='provider' className="input is-primary" type="text"placeholder="Proveedor"/>
                    </p>
                    <label className="label">Precio:</label>
                    <p>
                      $1600
                    </p>
                    <Buttons/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default FormUser;
