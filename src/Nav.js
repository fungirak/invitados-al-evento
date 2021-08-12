import React from 'react'
import funguito from './img/funguito.svg'
import github from './img/github.png'
import './estilos.css'

const Nav = () => {


  return (
    <div>
      {/* NAVEGACION */}
      <nav className="pink ">
        <div className="container">
          <a href="https://fungirak.github.io/invitados-al-evento/" className="brand-logo center" >Mi Evento</a>
          <a href="https://github.com/fungirak/Invitados-Al-Evento" target="_blank" rel="noopener noreferrer" className="brand-logo right" ><img className="logo-nav sombra-logo" src={github} alt="" /></a>
          <a href="https://fungirak.github.io/fungirak-website-react/" target="_blank" rel="noopener noreferrer" className="brand-logo left" ><img className="logo-nav" src={funguito} alt="" /></a>
        </div>
      </nav>



    </div>
  )
}

export default Nav
