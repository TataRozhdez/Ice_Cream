import React from 'react'
import ReactDOM from 'react-dom'
import './resources/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'

const application = (
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>
)

ReactDOM.render(
  application,
  document.getElementById('root')
)

serviceWorker.unregister();
