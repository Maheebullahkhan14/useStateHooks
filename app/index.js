import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

const myid = document.getElementById('root')

const root = ReactDOM.createRoot(myid)

const element = (
  <App></App>
  
)

root.render(element)