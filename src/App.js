import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import TopMenu from "./components/TopMenu";
// import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import Product from "./components/products/Product";
import NewProduct from "./components/products/NewProduct";
import Home from './components/Home';
import UpdateProduct from './components/products/UpdateProduct';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Test from './components/products/Test';


function App() {
  return (
      <Router>  
        <div>
        <ToastContainer/>
        <TopMenu/>
          <div>
          <Routes>
             <Route exact path="/login"  element={<Login/>}/>
              <Route exact path="/register"  element={<Register/>}/>
              <Route exact path="/home"  element={<Home/>}/>
              <Route exact path="/contactus"  element={<ContactUs/>}/>
              <Route exact path="/product/new"  element={<NewProduct/>}/>
              <Route exact path="/product/update"  element={<UpdateProduct/>}/>
              <Route exact path="/product/update/:id"  element={<UpdateProduct/>}/>
              <Route exact path="/product"  element={<Product/>}/>
              <Route exact path="/test"  element={<Test/>}/>
              <Route path="/" element={<Navigate to={<NotFound/>} />} /> 
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;



    