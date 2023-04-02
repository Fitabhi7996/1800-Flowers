import React, { useState } from 'react';
import {
    FaBars,
    FaUserAlt,
    FaShoppingBag,
    FaThList
}
from "react-icons/fa";
import logo from "../../images/Colorful Illustration Florist Logo.png";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/admin/productList",
            name:"Product List",
            icon:<FaThList/>
        },
        {
            path:"/admin/addproduct",
            name:"Add Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/admin/userslist",
            name:"Users List",
            icon:<FaUserAlt/>
        },
    ]
    return (
        <div className="container" >
           <div style={{width: isOpen ? "250px" : "50px" ,height:"auto",backgroundColor:"#ffaef2"}} className="sidebar">
               <div className="top_section">
                   <img src={logo} alt="" style={{width:"50px",height:"50px" ,display: isOpen ? "block" : "none"}} className="logo"/>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;