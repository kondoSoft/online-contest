import React, {Component} from "react"
import Pagination from './pagination'
import {ModalAsiggn, ModalEdit, ModalDetails} from './modals'



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
  this.openCheck = this.openCheck.bind(this)
}

  openModal(e, key) {
    e.preventDefault()
    this.setState({modalIsOpen: true})
    this.setState({detailRes:this.state.data[key]})
  }

  openCheck(key){
    var state = this.state.data
    var item = this.state.key
    var checked = document.getElementById(key).checked
    if(checked){
      state[key].checked = checked
      item = key
      this.setState({data: state})
      this.setState({key: item})
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
            {Object.keys(this.state.data).map((key)=>{
              return(
                <tr key={key}>
                  <td><a onClick={(e)=>this.openModal(e, key)} href="">{this.state.data[key].nombre}</a></td>
                  <td>{this.state.data[key].reservacion}</td>
                  <td>{this.state.data[key].email}</td>
                  <td className="">
                    <p className="control has-addons has-addons-centered">
                    <label className="checkbox">
                      <input type="checkbox" id={key} onChange={()=>this.openCheck(key)}/>
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
        <Pagination />
        <ModalEdit />
        <ModalAsiggn checked={this.state.data[this.state.key].checked}/>
        <ModalDetails detailRes={this.state.detailRes} isOpen={this.state.modalIsOpen} />
      </div>
    )
  }
}

export default TableUser;
