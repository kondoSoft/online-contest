import React, {Component} from "react"
import Pagination from './pagination';
import {ModalAsiggn, ModalEdit, ModalDetails} from './modals';


class TableUser extends Component{
  constructor(props){
    super(props)
    this.state = {
      active: "",
      id:"",
      detailres:"",
      data:{
        rev1:{
          nombre:'Misty Abbott',
          reservacion: 'Bass Guitar',
          email: '',
          checkPay: false,
          boletos: ''
        },
        rev2:{
          nombre:'John Smith',
          reservacion: 'Rhythm Guitar',
          email: '',
          checkPay: false,
          boletos: ''
        },
        rev3:{
          nombre:'Robert Mikels',
          reservacion: 'Lead Guitar',
          email: '',
          checkPay: false,
          boletos: ''
        },
        rev4:{
          nombre:'Karyn Holmbergs',
          reservacion: 'Drums',
          email: '',
          checkPay: false,
          boletos: ''
        }
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleModal = this.handleModal.bind(this)
  }
  handleChange(event){
    const value = event.targer.value
    const checked = Object.assign({}, this.state.checkPay)
    if (!checked[value]){
      checked[value] = true
    }else{
      checked[value] = false
    }
    this.setState({checked})
  }
  handleSubmit(event){
    alert('Boxes checked: ' +
    (this.state.checked))
  }
  handleModal(e, id){
    e.preventDefault()
    this.setState({active:"is-active"})
    this.setState({id:id})
  }
  render(){
    return (
      <div className="column box_table">
        <table className="table is-striped">
          <thead>
            <tr>
              <th>Participante</th>
              <th>Reservacion</th>
              <th>Correo Electronico</th>
              <th>Pagado</th>
              <th>Boletos</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.data).map((key)=>{
              return(
                <tr key={key}>
                  <td><a href=""
                  onClick={(e)=> {this.handleModal(e, key)}}>{this.state.data[key].nombre}</a></td>
                  <td>{this.state.data[key].reservacion}</td>
                  <td>{this.state.data[key].email}</td>
                  <td className="">
                    <p className="control has-addons has-addons-centered">
                    <label className="checkbox">
                      <input
                       type="checkbox"
                       onChange={this.handleChange}
                       checked="" id={key}/>
                    </label>

                    </p>
                  </td>
                  <td>{this.state.data[key].boletos}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Pagination />
        <ModalEdit />
        <ModalAsiggn />
        <ModalDetails active={this.state.active} datos={this.state.data} id={this.state.id}/>
      </div>
    )
  }
}

export default TableUser;
