import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppTitle } from './AppTitle'
import AppTable from './AppTable'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <AppTitle />

      <AppTable />


  </React.StrictMode>,
)
