import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const root = document.createElement('div')
document.body.appendChild(root)

render(<App />, root)