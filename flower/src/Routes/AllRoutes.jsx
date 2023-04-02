import {Route,Routes} from "react-router-dom"
import Home from "../components/Landing/Home"
import { Products } from "../pages/Products"
import Productdetails from "../pages/Productdetails"
import Cartpage from "../pages/Cartpage"
import Login from "../pages/Login"
import Payment from "../pages/Payment"
import Admindashboard from "../pages/AdminDasboard"
import Signup from "../pages/Signup"
import Address from "../pages/Address"

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/productdetails" element={<Productdetails/>} />
            <Route path="/cart" element={<Cartpage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/login/signup" element={<Signup/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/admin/*" element={<Admindashboard/>} />
            <Route path="/address" element={<Address/>} />
        </Routes>
    )
}