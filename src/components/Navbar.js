import React, {useState} from 'react'

export default function Navbar(props) {
  
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.bgLight}`} id='navbar'>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.textColorInfo}`} href='/'>
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            </div>
          </div>
          <button className={`badge badge-success bg-${props.textColorSuccess} mx-3`} onClick={props.toggleGreenMode}>Green Mode</button>
          <button className= "badge badge-success bg-dark mx-3" onClick={props.toggleDarkMode}>Dark Mode</button>
        </div>
      </nav>
    </>
  )
}
