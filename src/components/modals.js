import React, {Component} from "react"
import '../css/App.css';
import '../css/style.css';

export class ModalAsiggn extends Component{
  constructor(props){
    super(props)
    this.state = {
      active: '',
    }
    this.close = this.close.bind(this)
  }
  componentWillReceiveProps(){
    var active = this.props.isActive
    // console.log(active);
    active === false? this.setState({active:'is-active'}): this.setState({active:''}) ;
  }
  close(){
    this.setState({active: ''})
  }
  render(){
    return(
      <div className={`modal ${this.state.active}`} >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Asignacion de Boletos</p>
        </header>
        <section className="modal-card-body">
          <div className="content has-text-centered">
            <h4 className="title is-5">Nombre de Usuario</h4>
            <p className="subtitle is-6"><strong>Fulanito de Tal</strong></p><br/>
            <h4 className="title is-5">Numero de Reservacion</h4>
            <p className="subtitle is-6"><strong>3614578</strong></p>
            <h4>Cantidad</h4>
            <input id="campo" name="Boletos" type="number" min="0" max="5"/>
          </div>
        </section>
        <footer className="modal-card-foot ">
          <div className="column is-half is-offset-one-quarter">
            <div className="level control is-grouped is-horizontal">
              <p className="control level-right">
              <a onClick={this.close} className="button is-large is-warning">
                  <span className="icon is-large">
                    <i className="fa fa-times"></i>
                  </span>
                </a>
              </p>
              <p className="control ">
                <a href="list_user.html" className="button is-large is-success">
                  <span className="icon is-large">
                    <i className="fa fa-check"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
    )
  }
}
export class ModalDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      active: '',
    }
    this.close = this.close.bind(this)
  }
  componentWillReceiveProps(){
    var active = this.props.active
    // console.log(active);
    if(active.length !== 0)
    {
      this.setState({active: active})
    }
  }
  close(){
    this.setState({active: ''})
  }
  render(){
    return(
      <div className={`modal ${this.state.active}`}  >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Detalles de Usuario</p>
        </header>
        <section className="modal-card-body">
        {Object.keys(this.props.datos).map((key)=>{
          return(
            <div className="content has-text-centered">
              <h4 className="title is-5">Nombre </h4>
              <p className="subtitle is-6"><strong>{this.props.datos[key].nombre}</strong></p><br/>
              <h4 className="title is-5">Numero de Reservacion</h4>
              <p className="subtitle is-6"><strong>{this.props.datos[key].reservacion}</strong></p><br/>
              <h4 className="title is-5">Correo Electronico</h4>
              <p className="subtitle is-6"><strong>{this.props.datos[key].email}</strong></p><br/>
              <h4 className="title is-5">Boletos Asignados</h4>
              <li><strong>120215</strong></li>
              <li><strong>120216</strong></li>
              <li><strong>120217</strong></li>
            </div>
          )
        })
      }
        </section>
        <footer className="modal-card-foot ">
          <div className="column is-half is-offset-one-quarter">
            <div className="level control is-grouped is-horizontal">
              <p className="control level-right">
                <a className="button is-large is-warning" onClick={this.close}>
                  <span className="icon is-large">
                    <i className="fa fa-times"></i>
                  </span>
                </a>
              </p>
              <p className="control ">
                <a href="list_user.html" className="button is-large is-info">
                  <span className="icon is-large">
                    <i className="fa fa-pencil"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
    )
  }
}
export class ModalEdit extends Component{
  render(){
    return(
      <div className="modal " >
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Editar Usuario</p>
          </header>
          <section className="modal-card-body">
            <div className="content has-text-centered">
              <label className="label">Nombre de Usuario</label>
              <p className="control">
                <input className="input has-text-centered" type="text" name="name"/>
              </p><br/>
              <label className="label">Correo Electronico</label>
              <p className="control">
                <input className="input has-text-centered" type="text" name="name"/>
              </p><br/>
              <label className="label">Direccion</label>
              <p className="control">
                <input className="input has-text-centered" type="text" name="name"/>
              </p><br/>
              <label className="label">Telefono</label>
              <p className="control">
                <input className="input has-text-centered" type="text" name="name"/>
              </p><br/>
              <label className="label">Proveedor</label>
              <p className="control">
                <input className="input has-text-centered" type="text" name="name"/>
              </p><br/>
              <label className="label">Numero de Reservacion</label>
              <p className="control">
                <input className="input has-text-centered" type="text" name="name"/>
              </p>
            </div>
          </section>
          <footer className="modal-card-foot ">
            <div className="column is-half is-offset-one-quarter">
              <div className="level control is-grouped is-horizontal">
                <p className="control level-right">
                  <a className="button is-large is-warning">
                    <span className="icon is-large">
                      <i className="fa fa-times"></i>
                    </span>
                  </a>
                </p>
                <p className="control ">
                  <a href="list_user.html" className="button is-large is-success">
                    <span className="icon is-large">
                      <i className="fa fa-check"></i>
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
