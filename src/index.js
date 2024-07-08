import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Featured from './Components/Featured/Featured';
import Recommended from './Components/Recommended/Recommended';
import Product from './Components/Product/Product'
import ProductDetails from './Components/Product/ProductDetails'
import NotFound from './Components/NotFound/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}>
          <Route path='Home' element={<Home></Home>}></Route>
          <Route path='Shop' element={<Shop></Shop>}></Route>
          <Route path='Featured' element={<Featured></Featured>}></Route>
          <Route path='Recommended' element={<Recommended></Recommended>}></Route>
          <Route path='Product' element={<Product></Product>}>
            <Route path=':parameter' element={<ProductDetails></ProductDetails>}></Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
