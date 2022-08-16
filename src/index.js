import React from 'react';
import ReactDOM from 'react-dom/client';
import CarStore from './CarStore';
import '../src/styles/global.css'
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   <CarStore/>
   </Router>
);


