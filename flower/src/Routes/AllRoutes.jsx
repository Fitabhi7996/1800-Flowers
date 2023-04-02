import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../components/Landing/Home"
import Products  from '../pages/Products';
import Productdetails from "../pages/Productdetails"
// import Signup from "../pages/Signup"
// import Login from "../pages/Login"
import Cartpage from "../pages/Cartpage"
// import Payment from "../pages/Payment"
// import Address from "../pages/Address"
// import AdminDasboard from "../pages/AdminDasboard"

const AllRoutes = () => {

  return (

    <div>
         <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/productDetails/:id" element={<Productdetails/>}></Route>
      <Route path="/cartpage" element={<Cartpage />}></Route> 
      {/* <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      
      {/* <Route path="/payment" element={<Payment />}></Route>
      <Route path="/address" element={<Address />}></Route>
      <Route path="/admindasboard" element={<AdminDasboard />}></Route> */}




      
    </Routes>
      
    </div>
  )
}

export default AllRoutes
