import React, {Component} from "react"
import Pagination from './pagination'
import {ModalAsiggn, ModalEdit, ModalDetails} from './modals'
import Modal from 'react-modal'

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
      modalIsOpen: false,
      detailRes:"",
      data:{
        rev1:{
          nombre:'Misty Abbott',
          reservacion: 'Bass Guitar',
          email: '',
          checked: false,
          boletos: [
            10400,
            10401,
            10402
          ]
        },
        rev2:{
          nombre:'John Smith',
          reservacion: 'Rhythm Guitar',
          email: '',
          checked: false,
          boletos: []
        },
        rev3:{
          nombre:'Robert Mikels',
          reservacion: 'Lead Guitar',
          email: '',
          checked: false,
          boletos: []
        },
        rev4:{
          nombre:'Karyn Holmbergs',
          reservacion: 'Drums',
          email: '',
          checked: false,
          boletos: []
        }
      }
  }
  this.openModal = this.openModal.bind(this)
  this.afterOpenModal = this.afterOpenModal.bind(this)
  this.closeModal = this.closeModal.bind(this)
}

  openModal(e, key) {
    e.preventDefault()
    this.setState({modalIsOpen: true})
    this.setState({detailRes:this.state.data[key]})
    console.log(this.state.data[key]);
  }
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }
  closeModal() {
    this.setState({modalIsOpen: false})
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

            {Object.keys(this.state.data).map((key)=>{
              return(
                <tr key={key}>
                  <td><a onClick={(e)=>this.openModal(e, key)} >{this.state.data[key].nombre}</a></td>
                  <td>{this.state.data[key].reservacion}</td>
                  <td>{this.state.data[key].email}</td>
                  <td className="">
                    <p className="control has-addons has-addons-centered">
                    <label className="checkbox">
                      <input type="checkbox" id={key} onChange={(e)=>this.openModal(e, key)}/>
                    </label>
                    </p>
                  </td>
                  <td>
                    <p className="control has-addons has-addons-centered">
                      {this.state.data[key].boletos.length}
                    </p>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
                      <p className="subtitle is-6"><strong>{this.state.detailRes.nombre}</strong></p><br/>
                      <h4 className="title is-5">Numero de Reservacion</h4>
                      <p className="subtitle is-6"><strong>{this.state.detailRes.reservacion}</strong></p><br/>
                      <h4 className="title is-5">Correo Electronico</h4>
                      <p className="subtitle is-6"><strong>{this.state.detailRes.email}</strong></p><br/>
                      <h4 className="title is-5">Boletos Asignados</h4>
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
        <Pagination />
        {/* <ModalEdit />
        <ModalAsiggn checkOpen={this.state.modalCheckOpen}/>
        <ModalDetails detailRes={this.state.detailRes} isOpen={this.state.modalIsOpen} /> */}
      </div>
    )
  }
}
class ModalAssign extends Component{
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default TableUser;
