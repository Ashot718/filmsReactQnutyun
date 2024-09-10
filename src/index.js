import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Single from './Pages/Single';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Leiaute from './Leiaute';
import Erorr from './Conponents/Erorr';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Leiaute/>}>
        <Route index element={<App />}/>
        <Route path="/single/:id" element={<Single/>} />
        <Route path='*' element={<Erorr/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


