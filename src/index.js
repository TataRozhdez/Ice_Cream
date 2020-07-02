import React from 'react'
import ReactDOM from 'react-dom'
import './resources/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

const application = (
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <App />  
      </BrowserRouter> 
    </ParallaxProvider>
  </React.StrictMode>
)

ReactDOM.render(
  application,
  document.getElementById('root')
)

serviceWorker.unregister();
