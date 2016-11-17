import React, {Component} from "react"
import Pagination from './pagination'
// import {ModalAsiggn, ModalEdit, ModalDetails} from './modals'
import Modal from 'react-modal'
import request from 'superagent'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
  }
}

class TableUser extends Component{
  constructor(props){
    super(props)
    this.state = {
      key:'rev1',
      name:"",
      buttons:'',
      modalIsOpen: false,
      detailRes:"",
      data:[]
  }
  this.openModal = this.openModal.bind(this)
  this.closeModal = this.closeModal.bind(this)
  this.renderItems = this.renderItems.bind(this)
}
  componentDidMount(){
    request
      .get('http://localhost:8080/users')
      .end(function(err, res){
        this.setState({ data : res.body.data })

      }.bind(this));
  }

  renderItems(){

    var item = this.state.data
    return(
      item.map(function(item, key){
        return(
          <tr key={key}>
            <td><a name="anchor" onClick={(e)=>this.openModal(e, key)} >{item.name}</a></td>
            <td>{item.reservation}</td>
            <td>{item.email}</td>
            <td className="">
              <p className="control has-addons has-addons-centered">
              <label className="checkbox">
                <input name="check" type="checkbox" id={key} onChange={(e)=>this.openModal(e, key)}/>
              </label>
              </p>
            </td>
            <td>
              <p className="control has-addons has-addons-centered">

                {item.tickets[0] === null ? ' ' : item.tickets.length}
              </p>
            </td>
          </tr>
        )
      }.bind(this))
    )
  }

  openModal(e, key) {
    var itemModal = this.state.data[key]
    e.preventDefault()
    this.setState({modalIsOpen: true})
    this.setState({detailRes:itemModal})
    this.setState({name:e.target.name})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }
  renderModal(){
    if (this.state.name === 'anchor') {
      return(
        <div className="content has-text-centered">
          <h4 className="title is-5">Nombre </h4>
          <p className="subtitle is-6"><strong>{this.state.detailRes.name}</strong></p><br/>
          <h4 className="title is-5">Numero de Reservacion</h4>
          <p className="subtitle is-6"><strong>{this.state.detailRes.reservation}</strong></p><br/>
          <h4 className="title is-5">Correo Electronico</h4>
          <p className="subtitle is-6"><strong>{this.state.detailRes.email}</strong></p><br/>
          <h4 className="title is-5">Boletos Asignados</h4>
          <ul className="subtitle is-6">
          {this.state.detailRes.tickets.map(function(item, i){
            return(
              <li key={i}><strong>{item}</strong></li>
            )
          })}
          </ul>
          <br/>

        </div>
      )
    }else if (this.state.name === 'check'){
      return(
        <div className="content has-text-centered">
          <h4 className="title is-5">Nombre de Usuario</h4>
          <p className="subtitle is-6"><strong>{this.state.detailRes.nombre}</strong></p><br/>
          <h4 className="title is-5">Numero de Reservacion</h4>
          <p className="subtitle is-6"><strong>{this.state.detailRes.reservacion}</strong></p>
          <h4>Cantidad</h4>
          <input id="campo" name="Boletos" type="number" min="0" max="5"/>
        </div>
      )
    }else{
      return(
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
      )
    }
  }

  render(){
    return (
      <div className="column box_table">
        <table className="table is-striped">
          <thead>
            <tr >
              <th>Participante</th>
              <th>Reservacion</th>
              <th>Correo Electronico</th>
              <th style={{ textAlign:'center'}}>Pagado</th>
              <th style={{ textAlign:'center'}}>Boletos</th>
            </tr>
          </thead>
          <tbody>
            {this.renderItems()}
          </tbody>
        </table>
          <Modal
              isOpen={this.state.modalIsOpen}
              style={customStyles}
              contentLabel="Example Modal"
            >
            <ModalAssign closeM={this.closeModal} title="Modal Estatica" buttonsName={this.state.name}>
              {this.renderModal()}
            </ModalAssign>
          </Modal>
        <Pagination />
      </div>
    )
  }
}

class ModalAssign extends Component{
  render(){
    var button
    var colorButton
    if(this.props.buttonsName === 'anchor'){
      button = 'fa-pencil'
      colorButton = 'is-info'
    }else if (this.props.buttonsName === 'check') {
      button = 'fa-check'
      colorButton = 'is-success'
    }else{
      button = 'fa-pencil'
      colorButton = 'is-info'
    }
    return(
      <div className='modal is-active'   >
        <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p ref='subtitle' className="modal-card-title">{this.props.title}</p>
            </header>
            <section className="modal-card-body">
              {this.props.children}
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
                    <a href="" className={`button is-large ${colorButton}`}>
                      <span className="icon is-large">
                        <i className={`fa ${button}`}></i>
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
export default TableUser;
