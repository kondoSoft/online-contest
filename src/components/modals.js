import React, {Component} from "react"
import '../css/App.css';
import '../css/style.css';
import request from 'superagent'

export class ModalDetails extends Component{
  render(){
    return(
          <div className='modal is-active'   >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p ref='subtitle' className="modal-card-title">Detalles de Usuario</p>
            </header>
            <section className="modal-card-body">
                <div className="content has-text-centered">
                  <h4 className="title is-5">Nombre </h4>
                  <p className="subtitle is-6"><strong>{this.props.dataDetails.name}</strong></p><br/>
                  <h4 className="title is-5">Numero de Reservacion</h4>
                  <p className="subtitle is-6"><strong>{this.props.dataDetails.reservation}</strong></p><br/>
                  <h4 className="title is-5">Correo Electronico</h4>
                  <p className="subtitle is-6"><strong>{this.props.dataDetails.email}</strong></p><br/>
                  <h4 className="title is-5">Boletos Asignados</h4>
                  {this.props.dataDetails.tickets.map((item, index)=>{
                    return(
                      <li key={index}><strong>{item}</strong></li>
                    )
                  })}
                </div>
            </section>
            <footer className="modal-card-foot ">
              <div className="column is-half is-offset-one-quarter">
                <div className="level control is-grouped is-horizontal">
                  <p className="control level-right">
                    <a className="button is-large is-warning" onClick={this.props.closeM}>

                      <span className="icon is-large">
                        <i className="fa fa-times"></i>
                      </span>
                    </a>
                  </p>
                  <p className="control ">
                    <a onClick={(e)=>this.props.editModal(e, 'edit')} className="button is-large is-info edit">
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
export class ModalAsiggn extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentValue : 100
    }
    this.submit = this.submit.bind(this)
  }
  submit(e){
    e.preventDefault()
    var x = parseInt(this.refs.tickets.value)
    var arrayTickets = []
    var numInicial = this.state.currentValue + 1
    console.log(numInicial);
    for (var i = 1; i< x + 1; i++){
      arrayTickets.push(numInicial++)
    }
    this.setState({currentValue: numInicial})

    request.put(`http://localhost:8080/user/${this.props.dataDetails._id}`)
    .send({
        tickets    : arrayTickets
    })
    .set('Accept', 'application/json')
    .end(function(err, res){
      if(err){
        console.log(res);
      }
      if(res.statusText === "OK"){
        console.log(res);
        window.location.href = "http://localhost:3000/users";
      }
    })
  }
  render(){
    return(
      <div className='modal is-active' >
      <div className="modal-background"></div>
      <form onSubmit={this.submit} action='http://localhost:8080/user/'>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title " ref='subtitle'>Asignacion de Boletos</p>
          </header>
          <section className="modal-card-body">
            <div className="content has-text-centered">
              <h4 className="title is-5">Nombre de Usuario</h4>
              <p className="subtitle is-6"><strong>{this.props.dataDetails.name}</strong></p><br/>
              <h4 className="title is-5">Numero de Reservacion</h4>
              <p className="subtitle is-6"><strong>{this.props.dataDetails.reservation}</strong></p>
              <h4>Cantidad</h4>
              {/* Asignacion de Tickets */}
              <input ref='tickets' id="campo" name="Boletos" type="number" min="1" max="5"/>
            </div>
          </section>
          <footer className="modal-card-foot ">
            <div className="column is-half is-offset-one-quarter">
              <div className="level control is-grouped is-horizontal">
                <p className="control level-right">
                <a onClick={this.props.closeM} className="button is-large is-warning">
                  <span className="icon is-large">
                    <i className="fa fa-times"></i>
                  </span>
                </a>
                </p>
                <p className="control ">
                  <button className="button is-large is-success">
                    <span className="icon is-large">
                      <i className="fa fa-check"></i>
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </form>
    </div>
    )
  }
}

export class ModalEdit extends Component{
  constructor(props){
    super(props)

    this.submit = this.submit.bind(this)
  }
  submit(e){
    e.preventDefault()
    request.put(`http://localhost:8080/user/${this.props.dataDetails._id}`)
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
        console.log(res);
      }
      if(res.statusText === "OK"){
        console.log(res);
        window.location.href = "http://localhost:3000/users";
      }
    })
  }
  render(){
    return(
      <div className="modal is-active" >
        <div className="modal-background"></div>
        <form onSubmit={this.submit} action='http://localhost:8080/user/'>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Editar Usuario</p>
            </header>
            <section className="modal-card-body">
              <div className="content has-text-centered">

                  <label className="label">Nombre de Usuario</label>
                  <p className="control">
                    <input ref='name' className="input has-text-centered" type="text" name="name" defaultValue={this.props.dataDetails.name}/>
                  </p><br/>
                  <label className="label">Correo Electronico</label>
                  <p className="control">
                    <input ref='email' className="input has-text-centered" type="text" name="name" defaultValue={this.props.dataDetails.email}/>
                  </p><br/>
                  <label className="label">Direccion</label>
                  <p className="control">
                    <input ref='address'  className="input has-text-centered" type="text" name="name" defaultValue={this.props.dataDetails.address}/>
                  </p><br/>
                  <label className="label">Telefono</label>
                  <p className="control">
                    <input ref='phone'  className="input has-text-centered" type="text" name="name" defaultValue={this.props.dataDetails.phone}/>
                  </p><br/>
                  <label className="label">Proveedor</label>
                  <p className="control">
                    <input ref='provider'  className="input has-text-centered" type="text" name="name" defaultValue={this.props.dataDetails.provider}/>
                  </p><br/>
                  <label className="label">Numero de Reservacion</label>
                  <p className="control">
                    <input ref='reservation'  className="input has-text-centered" type="text" name="name" defaultValue={this.props.dataDetails.reservation}/>
                  </p>

              </div>
            </section>
            <footer className="modal-card-foot ">
              <div className="column is-half is-offset-one-quarter">
                <div className="level control is-grouped is-horizontal">
                  <p className="control level-right">
                    <a onClick={this.props.closeM} className="button is-large is-warning">
                      <span className="icon is-large">
                        <i className="fa fa-times"></i>
                      </span>
                    </a>
                  </p>
                  <p className="control ">
                    <button className="button is-large is-success">
                      <span className="icon is-large">
                        <i className="fa fa-check"></i>
                      </span>
                    </button>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </form>
      </div>
    )
  }
}
