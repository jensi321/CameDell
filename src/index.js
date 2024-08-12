import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CuponDescription from './Components/Pages/CuponDescription';
import Subscriptionuser from './Components/Pages/Subscriptionuser';
import PaymentDetails from './Components/Pages/PaymentDetails';
import CashBackOfferPages from './Components/Pages/CashBackOfferPages';
import DiscountPage from './Components/Pages/DiscountPage';
import VouchersPages from './Components/Pages/VouchersPages';
import Home from './Components/Pages/Home';
import Dashbord from './Components/Pages/Dashbord';
import Automotive from './Components/Pages/Automotive';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/automotive' element={<Automotive />} />
        <Route path='/cupondescription' element={<CuponDescription />} />
        <Route path='/subscription' element={<Subscriptionuser />} />
        <Route path='/pymentdetails' element={<PaymentDetails />} />
        <Route path='/cashbackoffer' element={<CashBackOfferPages />} />
        <Route path='/dicountcoupon' element={<DiscountPage />} />
        <Route path='/voucher' element={<VouchersPages />} />
        <Route path='/dashbord' element={<Dashbord />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  </>
);
