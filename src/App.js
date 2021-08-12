import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Formulario from './Formulario'
import Tabla from './Tabla'
import M from 'materialize-css';
import './materialize/css/materialize.min.css'
import './estilos.css'

const initialInvitado = {
  _id: undefined,
  dni: '',
  nombre: '',
  apellido: '',
  pagado: '',
  usuarioInsta: '@',
  usuarioTw: '@',
}





const App = () => {
  const [invitado, setInvitado] = useState(initialInvitado);
  const [listaDeInvitados, setListaDeInvitados] = useState([]);


  /************************************/
  /*  PUT & POST (Según exista _id)   */
  /************************************/

  const agregarInvitado = (e) => {
    e.preventDefault();
    console.log(invitado._id);
    if (invitado._id) {
      fetch('https://mis-invitados-app.herokuapp.com/api/invitados/' + invitado._id, {
        method: 'PUT',
        body: JSON.stringify({
          dni: invitado.dni,
          nombre: invitado.nombre,
          apellido: invitado.apellido,
          pagado: invitado.pagado,
          usuarioInsta: invitado.usuarioInsta,
          usuarioTw: invitado.usuarioTw
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(invitadoEditado => {
          console.log(invitadoEditado);
          M.toast({ html: 'Invitado Editado', displayLength: 1500 });
          setInvitado({ _id: '', dni: '', nombre: '', apellido: '', pagado: '', usuarioInsta: '@', usuarioTw: '@' });
          obtenerInvitados();

        });

    } else {
      fetch('https://mis-invitados-app.herokuapp.com/api/invitados/', {
        method: 'POST',
        body: JSON.stringify(invitado),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          M.toast({ html: '¡Invitado Guardado!', displayLength: 1500 });
          setInvitado(initialInvitado);
          obtenerInvitados();
        })
        .catch(err => console.log(err));
    }
  }

  /**************************/
  /*  GET (Carga Inicial)   */
  /**************************/

  const obtenerInvitados = () => {
    fetch('https://mis-invitados-app.herokuapp.com/api/invitados/')
      .then(res => res.json())
      .then(listaDeInvitados => {
        console.log(listaDeInvitados);
        setListaDeInvitados(listaDeInvitados);
      });
  }

  useEffect(() => {
    obtenerInvitados();
  }, [])



  /***********/
  /*  PUT    */
  /***********/


  const handleEdit = (id) => {
    fetch('https://mis-invitados-app.herokuapp.com/api/invitados/' + id)
      .then(res => res.json())
      .then(invitadoAEditar => {
        console.log(invitadoAEditar);
        setInvitado({
          _id: invitadoAEditar._id,
          dni: invitadoAEditar.dni,
          nombre: invitadoAEditar.nombre,
          apellido: invitadoAEditar.apellido,
          pagado: invitadoAEditar.pagado,
          usuarioInsta: invitadoAEditar.usuarioInsta,
          usuarioTw: invitadoAEditar.usuarioTw
        });

      });
    obtenerInvitados();
  }



  /*************/
  /*  DELETE   */
  /*************/

  const handleDelete = (id) => {
    if (window.confirm('Estas seguro de eliminar el invitado?')) {
      fetch('https://mis-invitados-app.herokuapp.com/api/invitados/' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(invitadoEliminado => {
          console.log(invitadoEliminado);
          M.toast({ html: 'Invitado eliminado', displayLength: 1000 });
          obtenerInvitados();
        });
      console.log('Eliminando', id);
    }
  }


  /*  FORMULARIO INPUTS   */
  const handleInputChange = (e) => {
    setInvitado({
      ...invitado,
      [e.target.name]: e.target.value
    });
  }


  return (
    <div>
      <Nav />
      <div className="container-fluid  m12 s12">
        <div className="row">
          <div className="col m4 s12">
            <h5 className="center pink-text">NUEVO INVITADO</h5>
            <div className="card">
              <div className="card-content">
                <Formulario
                  invitado={invitado}
                  agregarInvitado={agregarInvitado}
                  handleInputChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="col s12 m8">

            <h5 className="center  green-text">LISTA DE INVITADOS</h5> <hr />
            <Tabla
              listaDeInvitados={listaDeInvitados}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

