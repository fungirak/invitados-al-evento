import React from 'react'


const Formulario = ({ invitado, agregarInvitado, handleInputChange, }) => {
    return (
        <div>
            <form onSubmit={agregarInvitado} method="post" className="center-align" id="formulario">

                <div className="row  ajuste-input">
                    <div className="input-field col s12 ajuste-input">
                        <input type="number" id="dni"
                            className="validate"
                            value={invitado.dni}
                            onChange={handleInputChange}
                            name="dni"
                            placeholder="Número de DNI"
                            required
                            min="1000000" max="100000000"

                        />
                        <label for="dni">Número de DNI</label>
                        {invitado.dni &&
                            <span className="helper-text" data-error="🧐 Checkear dni" data-success="👍🏻 ¡Correcto!"></span>
                        }

                    </div>
                </div>
                <div className="row ajuste-input">
                    <div className="input-field col s12 ajuste-input">
                        <input type="text" id="nombre"
                            className="validate"
                            value={invitado.nombre}
                            onChange={handleInputChange}
                            name="nombre"
                            placeholder="Nombre"
                            required
                            minlength="2" maxlength="64"
                            pattern="[A-Za-z]+"
                        />
                        <label for="nombre" >Nombre</label>
                        {invitado.nombre &&
                            <span className="helper-text" data-error="🧐 Checkear nombre" data-success="😃 ¡Correcto!"></span>
                        }
                    </div>
                </div>

                <div className="row ajuste-input">
                    <div className="input-field col s12 ajuste-input">
                        <input type="text" id="apellido"
                            className="validate"
                            value={invitado.apellido}
                            onChange={handleInputChange}
                            name="apellido"
                            placeholder="Apellido"
                            required
                            minlength="2" maxlength="64"
                            pattern="[A-Za-z]+"
                        />
                        <label for="apellido" >Apellido</label>
                        {invitado.apellido &&
                            <span className="helper-text" data-error="🧐 Checkear apellido" data-success="😎 ¡Correcto!"></span>
                        }
                    </div>
                </div>


                <div className="row ajuste-input">
                    <div className="input-field col s12 ajuste-input">
                        <input type="text" id="pagado"
                            className="validate"
                            value={invitado.pagado}
                            onChange={handleInputChange}
                            name="pagado"
                            placeholder="¿Pagó? ( si - no )"
                            required
                            minlength="2" maxlength="2"
                            pattern="si|no|Si|No|SI|NO|sI|nO"
                        />
                        <label for="pagado">¿Pagó? ( si - no )</label>
                        {invitado.pagado &&
                            <span className="helper-text" data-error="🧐 Checkear pago" data-success="Guardado"></span>
                        }
                    </div>
                </div>



                <div className="row ajuste-input">
                    <div className="input-field col s12 ajuste-input">
                        <input type="text" id="usuarioInsta"
                            className="validate"
                            value={invitado.usuarioInsta}
                            onChange={handleInputChange}
                            name="usuarioInsta"
                            placeholder="usuario de instagram"
                            minlength="2" maxlength="32"

                        />
                        <label for="usuarioInsta">usuario de instagram</label>
                        {invitado.usuarioInsta &&
                            <span className="helper-text" data-error="🧐 Check insta" data-success="💓 ¡Seguinos @Party4Ever!"></span>
                        }
                    </div>
                </div>

                <div className="row ajuste-input">
                    <div className="input-field col s12 ajuste-input">
                        <input type="text" id="usuarioTw"
                            className="validate"
                            value={invitado.usuarioTw}
                            onChange={handleInputChange}
                            name="usuarioTw"
                            placeholder="usuario de twitter"
                            minlength="2" maxlength="32"
                        />
                        <label for="usuarioTw">usuario de twitter</label>
                        {invitado.usuarioTw &&
                            <span className="helper-text" data-error="🧐 Checkear tw" data-success="🐦 ¡Follow Me @Party4Ever!"></span>
                        }
                    </div>
                </div>

                <button className="btn light-blue " type="submit">
                    GUARDAR
                </button>

            </form>
        </div>
    )
}

export default Formulario
