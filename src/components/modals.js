import React, {Component} from "react"
import '../css/App.css';
import '../css/style.css';
import Modal from "react-modal"
import {Link} from 'react-router'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',

  }
}

export class ModalAsiggn extends Component{
  constructor(props){
    super(props)
    this.state = {
      checked: false,
    }
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.checkClient = this.checkClient.bind(this)
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal() {
    this.setState({checked: false})
  }
  componentWillReceiveProps(nextProps){

    if (nextProps) {
      this.setState({checked: true})
    }

  }
  checkClient(){
    console.log('props',this.props);
  }
  render(){
    return(
      <Modal
        isOpen={this.state.checked}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className='modal is-active' >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title " ref='subtitle'>Asignacion de Boletos</p>
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
              <a onClick={this.closeModal} className="button is-large is-warning">
                <span className="icon is-large">
                  <i className="fa fa-times"></i>
                </span>
              </a>
              </p>
              <p className="control ">
                <Link onClick={this.props.checkClient} href="" className="button is-large is-success">
                  <span className="icon is-large">
                    <i className="fa fa-check"></i>
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </Modal>
    )
  }
}
export class ModalDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false,
      modalCheckOpen: false
    }
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal() {
    this.setState({modalIsOpen: false})
  }
  componentWillReceiveProps(nextProps){

  }
  render(){
    var boletos = this.props.detailRes.boletos
    var boleto = []
    boleto = (boletos !== undefined)? boletos: boleto;

    return(
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <div className='modal is-active'   >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p ref='subtitle' className="modal-card-title">Detalles de Usuario</p>
            </header>
            <section className="modal-card-body">
                <div className="content has-text-centered">
                  <h4 className="title is-5">Nombre </h4>
                  <p className="subtitle is-6"><strong>{this.props.detailRes.nombre}</strong></p><br/>
                  <h4 className="title is-5">Numero de Reservacion</h4>
                  <p className="subtitle is-6"><strong>{this.props.detailRes.reservacion}</strong></p><br/>
                  <h4 className="title is-5">Correo Electronico</h4>
                  <p className="subtitle is-6"><strong>{this.props.detailRes.email}</strong></p><br/>
                  <h4 className="title is-5">Boletos Asignados</h4>
                  {boleto.map((item, index)=>{
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
                    <a className="button is-large is-warning" onClick={this.closeModal}>
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
      </Modal>
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
