import React from 'react'
import './css/App.css'

export const AppTitle = () => {
  return (
    <div className="container shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a id='titulo' className="navbar-brand">Lista de Pendientes</a>
        </div>
      </nav>
    </div>

  )
}
