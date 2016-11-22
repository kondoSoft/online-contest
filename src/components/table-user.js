import React, {Component} from "react"
import Pagination from './pagination'
import {ModalDetails, ModalAsiggn, ModalEdit} from './modals'
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
      nameModal:"",
      buttons:'',
      modalIsOpen: false,
      modalIsOpenEdit: false,
      detailRes:"",
      data:[]
    }
  this.openModal = this.openModal.bind(this)
  this.closeModal = this.closeModal.bind(this)
  this.renderItems = this.renderItems.bind(this)
  this.openModalEdit = this.openModalEdit.bind(this)
  }

  openModal(e, key) {
    var itemModal = this.state.data[key]
    e.preventDefault()
    this.setState({modalIsOpen: true})
    this.setState({detailRes:itemModal})
    this.setState({nameModal:e.target.className})
  }
  closeModal() {
    this.setState({modalIsOpen: false})
  }
  openModalEdit(e, name){
    e.preventDefault()
    this.setState({nameModal: name})
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
            <td><a className="anchor" onClick={(e)=>this.openModal(e, key)} >{item.name}</a></td>
            <td>{item.reservation}</td>
            <td>{item.email}</td>
            <td className="">
              <p className="control has-addons has-addons-centered">
              <label className="checkbox">
                <input className="check" type="checkbox" id={key} onChange={(e)=>this.openModal(e, key)}/>
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
            {(this.state.nameModal === 'anchor') ?
              <ModalDetails editModal={this.openModalEdit} closeM={this.closeModal} dataDetails={this.state.detailRes}/>
            :
              ''
            }
            {(this.state.nameModal === 'check') ?
              <ModalAsiggn closeM={this.closeModal} dataDetails={this.state.detailRes}/>
            :
              ''
            }
            {(this.state.nameModal === 'edit') ?
              <ModalEdit closeM={this.closeModal}  dataDetails={this.state.detailRes}/>
            :
              ''
            }

          </Modal>
        <Pagination />
      </div>
    )
  }
}



export default TableUser;
