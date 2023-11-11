import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from "react-router-dom"
import { CartProvider } from './data/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <CartProvider>
      <App /> 
    </CartProvider>
    
  </Router>
)


reportWebVitals()
