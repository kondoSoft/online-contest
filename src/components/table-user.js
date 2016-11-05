import React, {Component} from "react"
import Pagination from './pagination';
import {ModalAsiggn, ModalEdit, ModalDetails} from './modals';


class TableUser extends Component{
  constructor(props){
    super(props)
    this.state = {
      isChecked:false,
      data:{
        rev1:{
          nombre:'Misty Abbott',
          revervacion: 'Bass Guitar',
          email: '',
          pagado: false,
          boletos: ''
        },
        rev2:{
          nombre:'John Smith',
          revervacion: 'Rhythm Guitar',
          email: '',
          pagado: false,
          boletos: ''
        },
        rev3:{
          nombre:'Robert Mikels',
          revervacion: 'Lead Guitar',
          email: '',
          pagado: false,
          boletos: ''
        },
        rev4:{
          nombre:'Karyn Holmbergs',
          revervacion: 'Drums',
          email: '',
          pagado: false,
          boletos: ''
        }
      }
    }
    this.toggleChecked = this.toggleChecked.bind(this)
  }
  toggleChecked(key){
    var state = this.state.data
    state[key].pagado = !state[key].pagado
    this.setState({data:state})
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
              console.log(this.state.data[key].pagado);
              return(
                <tr key={key}>
                  <td><a href="#">{this.state.data[key].nombre}</a></td>
                  <td>{this.state.data[key].reservacion}</td>
                  <td>{this.state.data[key].email}</td>
                  <td>
                    <p className="control has-addons has-addons-centered">
                      <label className="checkbox">
                        <input
                         type="checkbox"
                         onChange={()=> this.toggleChecked(key)}
                         checked={this.state.data[key].pagado} />
                      </label>
                    </p>
                  </td>
                  <td>{this.state.data[key].boletos}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Pagination/>
        <ModalEdit />
        <ModalAsiggn isActive={this.state.isChecked}/>
        <ModalDetails />
      </div>
    )
  }
}

export default TableUser;
