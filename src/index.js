import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AddProduct />
    <SignUpUser />
  </React.StrictMode>,
  document.getElementById('root')
);