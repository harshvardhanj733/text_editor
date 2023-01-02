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
              <a className={`nav-link active text-${props.textColorInfo}`} aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                Features
              </a>
            </div>
          </div>
          <button className={`badge badge-success bg-${props.textColorSuccess} mx-3`} onClick={props.toggleGreenMode}>Green Mode</button>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked checked"/>
            <label className={`form-check-label text-${props.textColorDark}`} htmlFor="flexSwitchCheckChecked" onClick={props.toggleDarkMode}>{props.mode} mode</label>
          </div>
        </div>
      </nav>
    </>
  )
}
