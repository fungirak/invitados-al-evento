import React from 'react'

const Tabla = ({ listaDeInvitados, handleEdit, handleDelete}) => {
  
    return (
        <div>
             <table className="striped responsive-table  " >
                <thead>
                  <tr>
                    <th className="center">DNI</th>
                    <th className="center">NOMBRE</th>
                    <th className="center">APELLIDO</th>
                    <th className="center">¿PAGÓ?</th>
                    <th className="center">USUARIO INSTA</th>
                    <th className="center">USUARIO TW</th>
                    <th className="center">EDITAR / BORRAR </th>
                  </tr>
                </thead>
                <tbody>
                  {listaDeInvitados.map( invitado => (
                    <tr key={invitado._id}>
                      <td className="center text-flow">{invitado.dni}</td>
                      <td className="center">{invitado.nombre}</td>
                      <td className="center">{invitado.apellido}</td>
                      <td className="center" >{invitado.pagado}</td>
                      <td className="center">{invitado.usuarioInsta}</td>
                      <td className="center">{invitado.usuarioTw}</td>
                      <td className="col paq-buttons">
                        <button className=" position-buttons btn-small btn-floating  waves-effect waves-light  teal accent-3 " onClick={() => handleEdit(invitado._id)}>
                          <i className="material-icons">edit</i>
                        </button>

                        <button className="position-buttons btn-small btn-floating  waves-effect waves-light  black  " onClick={() => handleDelete(invitado._id)}>
                          <i className="material-icons">delete</i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
    )
}

export default Tabla
