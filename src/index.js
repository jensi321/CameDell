import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashbord from './Components/Pages/Dashbord';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Dashbord />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  </>
);
